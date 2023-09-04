export interface ShowTVInfo {
    id: string
    image?: {
        medium?: string
        original?: string
    }
    name: string
    type: string
    rating?: {
        average: number
    }
    summary?: string
    schedule?: {
        days?: string
    }
    averageRuntime?: string
    status?: string
    genres?: string[]
    type?: string
    language?: string
    premiered?: string
    officialSite?: string
    _embedded?: {
        cast: CastInfo[]
    }
}

export interface CastInfo {
    person?: {
        image?: string
        url?: string
        name?: string
    }
    character?: {
        name?: string
        url?: string
    }
}