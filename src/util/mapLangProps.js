import { isEmpty, isArray, hasProperty } from './commonUtils'

const defaultLangValue = lang => {
  switch (lang) {
    case 'it':
      return [{ lang: lang, value: 'Non disponibile in italiano' }]
    case 'en':
      return [{ lang: lang, value: 'Not available for english' }]
    default:
      return [{ lang: lang, value: `Not available for ${lang}` }]
  }
}

// returns true when provided 'obj' has a 'lang' property
const hasLangProperty = obj => hasProperty('lang')(obj)

// returns true when provided 'property' has at least
// one entry that produce true when provided to 'hasLangProperty'
const isLangProperty = property =>
  property.some(entry => hasLangProperty(entry))

const filterLangValues = ([key, values], lang) => {
  const langValue = values.filter(item => item.lang === lang)
  return isEmpty(langValue) ? [key, defaultLangValue(lang)] : [key, langValue]
}

export const mapLangProps = (data, lang) => {
  const filterLangData = Object.entries(data)
    .filter(
      pair => isArray(pair[1]) && (isLangProperty(pair[1]) || isEmpty(pair[1]))
    )
    .map(pair => filterLangValues(pair, lang))
    .reduce(
      (accumulator, pair) => Object.assign(accumulator, { [pair[0]]: pair[1] }),
      {}
    )

  return { ...data, ...filterLangData }
}

export const mapLangPropsArr = (arr, lang) =>
  arr.map(props => mapLangProps(props, lang))
