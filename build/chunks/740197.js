/** Chunk was on web.js **/
/** chunk id: 740197, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HS: () => d,
  Hg: () => u,
  PW: () => p,
  S5: () => i,
  ZA: () => o,
  l0: () => f
}), require("./358797.js"), require("./539854.js");
var Chunk65154 = require("./65154.js");
let i = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
  o = i && "setSinkId" in HTMLAudioElement.prototype;

function a(e) {
  return {
    id: r.w5,
    type: e,
    index: 0,
    name: "Default"
  }
}

function s() {
  return [a(Chunk65154.h7.AUDIO_INPUT), a(Chunk65154.h7.AUDIO_OUTPUT), a(Chunk65154.h7.VIDEO_INPUT)]
}

function l(e, t) {
  return e.filter(e => e.type === t)
}

function c() {
  return i ? navigator.mediaDevices.enumerateDevices().then(e => {
    let t = 0,
      n = 0,
      i = 0;
    return e.filter(e => {
      switch (e.kind) {
        case r.h7.AUDIO_INPUT:
        case r.h7.AUDIO_OUTPUT:
        case r.h7.VIDEO_INPUT:
          returntrue;
        default:
          returnfalse
      }
    }).map(e => {
      let o;
      switch (e.kind) {
        case r.h7.AUDIO_INPUT:
          o = t++;
          break;
        case r.h7.AUDIO_OUTPUT:
          o = n++;
          break;
        case r.h7.VIDEO_INPUT:
        default:
          o = i++
      }
      return {
        id: e.deviceId,
        type: e.kind,
        index: o,
        name: null != e.label && "" !== e.label ? e.label : 0 === o ? "Default" : "Device ".concat(o)
      }
    })
  }).then(e => (o || (e = e.filter(e => e.type !== r.h7.AUDIO_OUTPUT)).push(a(r.h7.AUDIO_OUTPUT)), e)).catch(s) : new Promise(e => {
    setImmediate(() => e(s()))
  })
}
async function u() {
  return l(await c(), Chunk65154.h7.AUDIO_INPUT)
}
async function d() {
  return l(await c(), Chunk65154.h7.AUDIO_OUTPUT)
}
async function f() {
  return l(await c(), Chunk65154.h7.VIDEO_INPUT)
}
async function p() {
  let e = await c();
  return [l(module, Chunk65154.h7.AUDIO_INPUT), l(module, Chunk65154.h7.AUDIO_OUTPUT), l(module, Chunk65154.h7.VIDEO_INPUT)]
}