const isEmptyArray = arr => arr.length === 0

const hasArrayValue = value => Array.isArray(value)

const hasLangValues = values => {
  const langValues = values.filter(item =>
    Object.prototype.hasOwnProperty.call(item, 'lang')
  )

  return !isEmptyArray(langValues)
}

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

const filterLangValues = ([key, values], lang) => {
  const langValue = values.filter(item => item.lang === lang)
  return isEmptyArray(langValue)
    ? [key, defaultLangValue(lang)]
    : [key, langValue]
}

export const mapLangProps = (data, lang) => {
  const filterLangData = Object.entries(data)
    .filter(
      pair =>
        hasArrayValue(pair[1]) &&
        (hasLangValues(pair[1]) || isEmptyArray(pair[1]))
    )
    .map(pair => filterLangValues(pair, lang))
    .reduce(
      (accumulator, pair) => Object.assign(accumulator, { [pair[0]]: pair[1] }),
      {}
    )

  return Object.assign(data, filterLangData)
}

export const mapLangPropsArr = (arr, lang) =>
  arr.map(props => mapLangProps(props, lang))
