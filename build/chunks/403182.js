/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Ng: () => O,
  OC: () => A,
  dg: () => S,
  dp: () => E,
  f3: () => b,
  iL: () => C,
  nA: () => I,
  qF: () => m,
  uV: () => y,
  vY: () => N
}), n(301563), n(47120), n(757143);
var r = n(200651),
  i = n(112456),
  o = n.n(i),
  a = n(392711),
  s = n.n(a),
  l = n(430824),
  c = n(594174),
  u = n(424218),
  d = n(74538),
  f = n(981631),
  _ = n(474936),
  p = n(388032);
let h = 524288e3,
  g = 524288e3;

function m(e, t) {
  return e instanceof File ? e : E(e.data.buffer, e.filename, null != t ? t : "text/plain")
}

function E(e, t, n) {
  return new File([e], t, {
    type: n
  })
}
let v = [{
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
  reName: /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/,
  klass: "code"
}, {
  reName: /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/,
  klass: "document"
}, {
  reName: /\.(?:xls|xlsx|numbers|csv)$/,
  klass: "spreadsheet"
}, {
  reName: /\.(?:html|xhtml|htm|js|xml|xls|xsd|css|styl)$/,
  klass: "webcode"
}, {
  reName: /\.(?:mp3|ogg|opus|wav|aiff|flac)$/,
  klass: "audio"
}];

function b(e) {
  return y(e.name, e.type)
}

function y(e, t) {
  var n;
  e = null !== (n = null == e ? void 0 : e.toLowerCase()) && void 0 !== n ? n : "";
  let r = s().find(v, n => null != n.reType && null != t ? n.reType.test(t) : null != n.reName && "" !== e && n.reName.test(e));
  return null != r ? r.klass : "unknown"
}

function O(e) {
  return o().filesize(e)
}

function S(e) {
  let t = c.default.getCurrentUser(),
    n = d.ZP.getUserMaxFileSize(t);
  if (null == e) return n;
  let r = l.Z.getGuild(e);
  return Math.max(null != r ? _.HO[r.premiumTier].limits.fileSize : f.mBz, n)
}

function I(e, t) {
  let n = S(t);
  return Array.from(e).some(e => e.size > n)
}

function T(e) {
  let t = 0;
  for (let n of e) t += n.size;
  return t
}

function N(e) {
  return T(e) > A()
}

function A() {
  let e = c.default.getCurrentUser();
  return null != e && e.isStaff() ? g : h
}

function C(e) {
  let {
    guildId: t,
    onClick: n
  } = e, i = (0, u.BU)(S(t) / 1024, {
    useKibibytes: !0
  }), o = (0, u.BU)(_.Uq / 1024, {
    useKibibytes: !0
  }), a = p.NW.formatToPlainString(p.t.q5fTZm, {
    maxSize: i
  }), s = p.NW.formatToPlainString(p.t.htbuIS, {
    premiumMaxSize: o
  }), l = p.NW.format(p.t.fjSvsL, {
    onClick: n
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [a, " ", s.replace("\n", " "), ". ", l]
  })
}