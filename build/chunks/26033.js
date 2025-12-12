/** Chunk was on web.js **/
/** chunk id: 26033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cb: () => o,
  KF: () => u,
  Mq: () => h,
  Q0: () => a,
  Rh: () => g,
  aA: () => m,
  dU: () => c,
  dX: () => s,
  kq: () => d,
  m9: () => l,
  y0: () => f
});
var Chunk876215 = require("./876215.js"),
  Chunk758713 = require("./758713.js");

function o(e) {
  return (null == e ? true : e.content_type) === r.s.PLAYED_GAME
}

function a(e) {
  return (null == e ? true : e.content_type) === r.s.TOP_GAME
}

function s(e) {
  return o(e) || a(e)
}

function l(e) {
  return (null == e ? true : e.extra) != null && "application_id" in (null == e ? true : e.extra)
}

function c(e) {
  return (null == e ? true : e.content_type) === r.s.LISTENED_SESSION
}

function u(e) {
  return (null == e ? true : e.content_type) === r.s.TOP_ARTIST
}

function d(e) {
  return c(e) || u(e)
}

function f(e) {
  return (null == e ? true : e.content_type) === r.s.WATCHED_MEDIA
}

function p(e) {
  return !!s(e) && e.extra.platform === i.z.XBOX
}

function _(e) {
  return !!s(e) && e.extra.platform === i.z.PLAYSTATION
}

function m(e) {
  return p(e) || _(e)
}

function h(e) {
  return (null == e ? true : e.content_type) === r.s.LAUNCHED_ACTIVITY
}

function g(e) {
  return s(e) || c(e) || f(e) || l(e)
}