---
title: "Episode Sources"
description: "Endpoint for getting episode watch/ download links"
---

Get source of a particular episode

## Base URL

```
https://dramx.vercel.app/api/anime/watch/{episode-id}
```
---
## Params

None

---

## Example

<code>https://dramx.vercel.app/api/anime/watch/blue-lock-episode-1</code>

Result:
```json
{
    "headers": {
        "Referer": ""
    },
    "sources": [
        {
            "url": "https://tc-001.abecdn.com/1ab5d45273a9183bebb58eb74d5722d8ea6384f350caf008f08cf018f1f0566d0cb82a2a799830d1af97cd3f4b6a9a81ef3aed2fb783292b1abcf1b8560a1d1aa308008b88420298522a9f761e5aa1024fbe74e5aa853cfc933cd1219327d1232e91847a185021b184c027f97ae732b3708ee6beb80ba5db6628ced43f1196fe/f5bc111e65c74a37fe6fc136766c7b24/ep.1.1677588557.360.m3u8",
            "isM3U8": true,
            "quality": "360p"
        },
        {
            "url": "https://tc-001.abecdn.com/1ab5d45273a9183bebb58eb74d5722d8ea6384f350caf008f08cf018f1f0566d0cb82a2a799830d1af97cd3f4b6a9a81ef3aed2fb783292b1abcf1b8560a1d1aa308008b88420298522a9f761e5aa1024fbe74e5aa853cfc933cd1219327d1232e91847a185021b184c027f97ae732b3708ee6beb80ba5db6628ced43f1196fe/f5bc111e65c74a37fe6fc136766c7b24/ep.1.1677588557.480.m3u8",
            "isM3U8": true,
            "quality": "480p"
        },
        {
            "url": "https://tc-001.abecdn.com/1ab5d45273a9183bebb58eb74d5722d8ea6384f350caf008f08cf018f1f0566d0cb82a2a799830d1af97cd3f4b6a9a81ef3aed2fb783292b1abcf1b8560a1d1aa308008b88420298522a9f761e5aa1024fbe74e5aa853cfc933cd1219327d1232e91847a185021b184c027f97ae732b3708ee6beb80ba5db6628ced43f1196fe/f5bc111e65c74a37fe6fc136766c7b24/ep.1.1677588557.720.m3u8",
            "isM3U8": true,
            "quality": "720p"
        },
        {
            "url": "https://tc-001.abecdn.com/1ab5d45273a9183bebb58eb74d5722d8ea6384f350caf008f08cf018f1f0566d0cb82a2a799830d1af97cd3f4b6a9a81ef3aed2fb783292b1abcf1b8560a1d1aa308008b88420298522a9f761e5aa1024fbe74e5aa853cfc933cd1219327d1232e91847a185021b184c027f97ae732b3708ee6beb80ba5db6628ced43f1196fe/f5bc111e65c74a37fe6fc136766c7b24/ep.1.1677588557.1080.m3u8",
            "isM3U8": true,
            "quality": "1080p"
        },
        {
            "url": "https://tc-001.abecdn.com/1ab5d45273a9183bebb58eb74d5722d8ea6384f350caf008f08cf018f1f0566d0cb82a2a799830d1af97cd3f4b6a9a81ef3aed2fb783292b1abcf1b8560a1d1aa308008b88420298522a9f761e5aa1024fbe74e5aa853cfc933cd1219327d1232e91847a185021b184c027f97ae732b3708ee6beb80ba5db6628ced43f1196fe/f5bc111e65c74a37fe6fc136766c7b24/ep.1.1677588557.m3u8",
            "isM3U8": true,
            "quality": "default"
        },
        {
            "url": "https://www001.anifastcdn.info/videos/hls/Scsf1xNl0xZz5QfGR5L38w/1680433075/193470/f5bc111e65c74a37fe6fc136766c7b24/ep.1.1677588557.m3u8",
            "isM3U8": true,
            "quality": "backup"
        }
    ],
    "download": "https://gogohd.net/download?id=MTkzNDcw&token=-mqeRvW1V94tXFCP-pRjxQ&expires=1680425874"
}
```
