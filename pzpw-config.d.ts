/**
 * Type definition for Project Zomboid mod configuration
 */
export interface ModConfig {
    [key: string]: unknown

    /**
     * Mod visible name
     */
    name: string,

    /**
     * Mod description
     */
    description: string,

    /**
     * Mod poster image name
     */
    poster?: string

    /**
     * Mod icon image name
     */
    icon?: string

    /**
     * Required mod(s)
     */
    require?: string | string[]

    /**
     * Pack file to include
     */
    pack?: string

    /**
     * Tile Definition to include
     */
    tiledef?: string
}

/**
 * Steam workshop page visibility
 */
export type WorkshopVisibility = "public" | "friendsOnly" | "private" | "unlisted"

/**
 * Project Zomboid workshop tags
 */
export type WorkshopTag = "Build 40" | "Build 41" | "Balance" | "Building" | "Clothing/Armor" | "Food" | "Framework" | "Hardmode" | "Interface" | "Items" | "Language/Translation" | "Literature" | "Map" | "Military" | "Misc" | "Models" | "Multiplayer" | "Pop Culture" | "Realistic" | "Silly/Fun" | "Textures" | "Traits" | "Vehicles" | "Weapons"

/**
 * Type definition for Project Zomboid workshop configuration
 */
export interface WorkshopConfig {
    [key: string]: unknown

    /**
     * The steam workshop mod page title
     */
    title: string

    /**
     * The mod visibility on steam workshop
     */
    visibility: WorkshopVisibility

    /**
     * List of mod ids to include in the workshop compilation
     */
    mods: string[]

    /**
     * The mod workshop tags
     */
    tags: WorkshopTag[]

    /**
     * The steam workshop generated id
     */
    id?: number

    /**
     * The mod author(s). Use a string or an array of string
     */
    author?: string | string[]
}

/**
 * Type definition for pzpw-config
 */
export interface PZPWConfig {
    /**
     * List of mods in this projects.
     */
    mods: {[modID: string]: ModConfig},

    /**
     * Workshop configuration
     */
    workshop: WorkshopConfig
}
