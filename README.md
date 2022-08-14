# Syt Backend Codes

[![Commit Amount][commit-image]][commit-url] [![Commit Last][commit-last-image]][commit-last-url]

## Project setup

```node
yarn install
```

### Run Server

```node
yarn serve
```

### Available Methods

#### Get Video Info

**Method** : `GET`
**URL** : `/info/video/:id`
**Response** :

```json
  {
    "id": "String",
    "title": "String",
    "desc": "String",
    "formats": [
      {
        "abr" : 0,
        "acodec" : "String",
        "asr" : "String",
        "ext" : "String",
        "filesize" : 0,
        "format" : "String",
        "formatId" : "String",
        "formatNode" : "String",
        "fps" : "String",
        "quaility" : 0,
        "tbr" : 0,
        // This is root link of video. u can use this link to download file
        "url" : "String",
        "vcodec" : "String"
        },
    ]
    "thumbnails": [
      {
        "id":"String",
        "height": 0,
        "width": 0,
        "resolution": "String",
        "url": "String",
      }
  ]}
```

#### Download Video On Server

**Method** : `GET`

**URL** : `/download/video/:id/:formatid`

**Response** : `Stream Object`

#### Open Video On Server

**Method** : `GET`

**URL** : `/open/video/:id/:formatid`

**Response** : `Stream Object`

[commit-url]: https://github.com/uys2000/syt-backend/commits/main
[commit-image]: https://badgen.net/github/commits/uys2000/syt-backend

[commit-last-url]: https://github.com/uys2000/syt-backend/commits/main
[commit-last-image]: https://badgen.net/github/last-commit/uys2000/syt-backend
