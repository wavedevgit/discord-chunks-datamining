/** Chunk was on web.js **/
/** chunk id: 453771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Aw: () => S,
  GD: () => b,
  Hb: () => O,
  Iu: () => C,
  SH: () => A,
  TX: () => y,
  VE: () => g,
  bB: () => T,
  o2: () => v,
  ww: () => m
}), require("./747238.js"), require("./896048.js");
var Chunk796873 = require("./796873.js"),
  i = require.n(Chunk796873),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk255438 = require("./255438.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");
let _ = 524288e3,
  h = 524288e3;

function m(e, t) {
  return e instanceof File ? e : g(e.data.buffer, e.filename, null != t ? t : "text/plain")
}

function g(e, t, n) {
  return new File([e], t, {
    type: n
  })
}
let E = [{
  reType: /^image\/vnd.adobe.photoshop/,
  klass: "photoshop"
}, {
  reType: /^image\/svg\+xml/,
  klass: "webcode"
}, {
  reType: /^image\//,
  klass: "image"
}, {
  reType: /^video\//,
  klass: "video"
}, {
  reName: /\.pdf$/,
  klass: "acrobat"
}, {
  reName: /\.ae/,
  klass: "ae"
}, {
  reName: /\.sketch$/,
  klass: "sketch"
}, {
  reName: /\.ai$/,
  klass: "ai"
}, {
  reName: /\.(?:rar|zip|7z|tar|tar\.gz)$/,
  klass: "archive"
}, {
  reName: /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|ts|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/,
  klass: "code"
}, {
  reName: /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/,
  klass: "document"
}, {
  reName: /\.(?:xls|xlsx|numbers|csv)$/,
  klass: "spreadsheet"
}, {
  reName: /\.(?:html|xhtml|htm|xml|xsd|css|styl)$/,
  klass: "webcode"
}, {
  reName: /\.(?:mp3|ogg|opus|wav|aiff|flac)$/,
  klass: "audio"
}];

function y(e) {
  return b(e.name, e.type)
}

function b(e, t) {
  var n;
  e = null != (n = null == e ? true : e.toLowerCase()) ? n : "";
  let r = o().find(E, n => null != n.reType && null != t ? n.reType.test(t) : null != n.reName && "" !== e && n.reName.test(e));
  return null != r ? r.klass : "unknown"
}

function O(e) {
  return i().filesize(e)
}

function v(e) {
  let t = l.default.getCurrentUser(),
    n = u.Ay.getUserMaxFileSize(t);
  if (null == e) return n;
  let r = s.A.getGuild(e);
  return Math.max(null != r ? f.TG[r.premiumTier].limits.fileSize : d.TbF, n)
}

function A(e, t) {
  let n = v(t);
  return Array.from(e).some(e => e.size > n)
}

function I(e) {
  let t = 0;
  for (let n of e) t += n.size;
  return t
}

function S(e) {
  return I(e) > T()
}

function T() {
  let e = l.default.getCurrentUser();
  return null != e && e.isStaff() ? h : _
}

function C(e) {
  let {
    guildId: t,
    onClick: n
  } = e, r = (0, c.Xq)(v(t) / 1024, {
    useKibibytes: true
  }), i = (0, c.Xq)(f.f3 / 1024, {
    useKibibytes: true
  });
  return p.intl.format(p.t.tRuxk9, {
    maxSize: r,
    premiumMaxSize: i,
    onClick: n
  })
}