import { isEmpty } from './commonUtils'

const ontologyLanguageProps = []
const vocabularyLanguageProps = [
  'owners',
  'creators',
  // 'license',
  // 'version.comment',
  'publishedBy',
  'tags' //,
  // 'themes',
  // 'subthemes'
]
const languageProps = [
  'titles',
  'descriptions',
  ...ontologyLanguageProps,
  ...vocabularyLanguageProps
]

const defaultLanguage = lang => {
  switch (lang) {
    case 'it':
      return [{ lang: lang, value: 'Non disponibile in italiano' }]
    case 'en':
      return [{ lang: lang, value: 'Not available for english' }]
    default:
      return [{ lang: lang, value: `Not available for ${lang}` }]
  }
}

const languagePropertyFilter = languageProperty =>
  languageProps.includes(languageProperty)

const languagePropertyMap = ([languagePropKey, languagePropValue], lang) => {
  const filteredProp = languagePropValue.filter(entry => entry.lang === lang)
  return isEmpty(filteredProp)
    ? [languagePropKey, defaultLanguage(lang)]
    : [languagePropKey, filteredProp]
}

export const dataParser = (data, lang) =>
  Object.entries(data)
    .filter(([key, val]) => languagePropertyFilter(key))
    .map(keyValPair => languagePropertyMap(keyValPair, lang))
    .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), data)

export const arrDataParser = (arr, lang) =>
  arr.map(props => dataParser(props, lang))
