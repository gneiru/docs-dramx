---
title: "Search"
description: "Endpoint for searching anime"
---

Get a list of anime series with keywords

## Base URL

```
https://dramx.vercel.app/api/anime/search?q={your_query}
```
--- 

## Params

### Query
```
https://dramx.vercel.app/api/anime/search?q={your_query}
```
### Pages

```
https://dramx.vercel.app/api/anime/search?q={your_query}&page=1
```

| Syntax | Required?  | Default     |
| :---    | :---        | :---          |
| q      | ✅        | null       |
| page   | ❎        | 1             |

--- 

## Examples
### Without Page <br>
<code>https://dramx.vercel.app/api/anime/search?q=blue%20lock</code>

Result: 
```json
{
    "currentPage": "1",
    "hasNextPage": false,
    "results": [
        {
            "id": "blue-lock",
            "title": "Blue Lock",
            "url": "https://gogoanime.gr//category/blue-lock",
            "image": "https://gogocdn.net/cover/blue-lock-1664387634.png",
            "releaseDate": "Released: 2022",
            "subOrDub": "sub"
        },
        {
            "id": "blue-lock-dub",
            "title": "Blue Lock (Dub)",
            "url": "https://gogoanime.gr//category/blue-lock-dub",
            "image": "https://gogocdn.net/cover/blue-lock-dub.png",
            "releaseDate": "Released: 2022",
            "subOrDub": "dub"
        }
    ]
}
```
### Without Page <br>
<code>https://dramx.vercel.app/api/anime/search?q=naruto&page=3</code>

Result: 
```json
{
    "currentPage": "3",
    "hasNextPage": false,
    "results": [
        {
            "id": "naruto-soyokazeden-movie-naruto-to-mashin-to-mitsu-no-onegai-dattebayo-dub",
            "title": "Naruto Soyokazeden Movie: Naruto to Mashin to Mitsu no Onegai Dattebayo!! (Dub)",
            "url": "https://gogoanime.gr//category/naruto-soyokazeden-movie-naruto-to-mashin-to-mitsu-no-onegai-dattebayo-dub",
            "image": "https://gogocdn.net/cover/naruto-soyokazeden-movie-naruto-to-mashin-to-mitsu-no-onegai-dattebayo-dub.png",
            "releaseDate": "Released: 2010",
            "subOrDub": "dub"
        },
        {
            "id": "naruto-dai-katsugeki-yuki-hime-shinobu-houjou-dattebayo-konoha-no-sato-no-dai-undouaki",
            "title": "Naruto: Dai Katsugeki!! Yuki Hime Shinobu Houjou Dattebayo! - Konoha no Sato no Dai Undouaki",
            "url": "https://gogoanime.gr//category/naruto-dai-katsugeki-yuki-hime-shinobu-houjou-dattebayo-konoha-no-sato-no-dai-undouaki",
            "image": "https://gogocdn.net/cover/naruto-dai-katsugeki-yuki-hime-shinobu-houjou-dattebayo-konoha-no-sato-no-dai-undouaki.png",
            "releaseDate": "Released: 2004",
            "subOrDub": "sub"
        },
        {
            "id": "naruto-dai-katsugeki-yuki-hime-shinobu-houjou-dattebayo-konoha-no-sato-no-dai-undouaki-dub",
            "title": "Naruto: Dai Katsugeki!! Yuki Hime Shinobu Houjou Dattebayo! - Konoha no Sato no Dai Undouaki (Dub)",
            "url": "https://gogoanime.gr//category/naruto-dai-katsugeki-yuki-hime-shinobu-houjou-dattebayo-konoha-no-sato-no-dai-undouaki-dub",
            "image": "https://gogocdn.net/cover/naruto-dai-katsugeki-yuki-hime-shinobu-houjou-dattebayo-konoha-no-sato-no-dai-undouaki-dub.png",
            "releaseDate": "Released: 2004",
            "subOrDub": "dub"
        },
        {
            "id": "naruto-narutimate-hero-3-tsuini-gekitotsu-jounin-vs-genin-musabetsu-dairansen-taikai-kaisai",
            "title": "Naruto Narutimate Hero 3: Tsuini Gekitotsu! Jounin vs. Genin!! Musabetsu Dairansen Taikai Kaisai!!",
            "url": "https://gogoanime.gr//category/naruto-narutimate-hero-3-tsuini-gekitotsu-jounin-vs-genin-musabetsu-dairansen-taikai-kaisai",
            "image": "https://gogocdn.net/cover/naruto-narutimate-hero-3-tsuini-gekitotsu-jounin-vs-genin-musabetsu-dairansen-taikai-kaisai.png",
            "releaseDate": "Released: 2005",
            "subOrDub": "sub"
        }
    ]
}
```