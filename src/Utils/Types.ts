export interface Language {
    code: String
    name: String
    native: String
    rtl: Boolean
}

export interface Country {
    code: String
    name: String
    native: String
    phone: String
    continent: Continent
    capital: String
    currency: String
    languages: [Language]
    emoji: String
    emojiU: String
    states: [State]
}

export interface State {
    code: String
    name: String
    country: Country
}
    
export interface Continent {
    code: String
    name: String
    countries: [Country]
}
