/** Chunk was on web.js **/
/** chunk id: 277738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DT: () => f,
  _e: () => u,
  gY: () => a,
  oG: () => p,
  sq: () => i,
  tS: () => d
}), require("./142703.js"), require("./321073.js");
var Chunk731854 = require("./731854.js");
let i = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
  a = i && "setSinkId" in HTMLAudioElement.prototype;

function o(e) {
  return {
    id: r.dx,
    type: e,
    index: 0,
    name: "Default"
  }
}

function s() {
  return [o(r.oh.AUDIO_INPUT), o(r.oh.AUDIO_OUTPUT), o(r.oh.VIDEO_INPUT)]
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
        case r.oh.AUDIO_INPUT:
        case r.oh.AUDIO_OUTPUT:
        case r.oh.VIDEO_INPUT:
          returntrue;
        default:
          returnfalse
      }
    }).map(e => {
      let a;
      switch (e.kind) {
        case r.oh.AUDIO_INPUT:
          a = t++;
          break;
        case r.oh.AUDIO_OUTPUT:
          a = n++;
          break;
        case r.oh.VIDEO_INPUT:
        default:
          a = i++
      }
      return {
        id: e.deviceId,
        type: e.kind,
        index: a,
        name: null != e.label && "" !== e.label ? e.label : 0 === a ? "Default" : "Device ".concat(a)
      }
    })
  }).then(e => (a || (e = e.filter(e => e.type !== r.oh.AUDIO_OUTPUT)).push(o(r.oh.AUDIO_OUTPUT)), e)).catch(s) : new Promise(e => {
    setImmediate(() => e(s()))
  })
}
async function u() {
  return l(await c(), r.oh.AUDIO_INPUT)
}
async function d() {
  return l(await c(), r.oh.AUDIO_OUTPUT)
}
async function f() {
  return l(await c(), r.oh.VIDEO_INPUT)
}
async function p() {
  let e = await c();
  return [l(e, r.oh.AUDIO_INPUT), l(e, r.oh.AUDIO_OUTPUT), l(e, r.oh.VIDEO_INPUT)]
}