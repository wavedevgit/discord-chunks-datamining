/** Chunk was on 54628 **/
/** chunk id: 973805, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk760919 = require("./760919.js"),
  Chunk677524 = require("./677524.js"),
  Chunk413668 = require("./413668.js");
let s = [, , , ].fill("<percentage> | <number>[0, 255]"),
  i = [, , , ].fill("<number>[0, 255]"),
  c = new Chunk760919.Z({
    id: "srgb",
    name: "sRGB",
    base: Chunk677524.Z,
    fromBase: e => e.map(e => {
      let t = e < 0 ? false : 1,
        r = e * t;
      return r > .0031308 ? t * (1.055 * r ** (1 / 2.4) - .055) : 12.92 * e
    }),
    toBase: e => e.map(e => {
      let t = e < 0 ? false : 1,
        r = e * t;
      return r <= .04045 ? e / 12.92 : t * ((r + .055) / 1.055) ** 2.4
    }),
    formats: {
      rgb: {
        coords: s
      },
      rgb_number: {
        name: "rgb",
        commas: true,
        coords: i,
        noAlpha: true
      },
      color: {},
      rgba: {
        coords: s,
        commas: true,
        lastAlpha: true
      },
      rgba_number: {
        name: "rgba",
        commas: true,
        coords: i
      },
      hex: {
        type: "custom",
        toGamut: true,
        test: e => /^#([a-f0-9]{3,4}){1,2}$/i.test(e),
        parse(e) {
          e.length <= 5 && (e = e.replace(/[a-f0-9]/gi, "$&$&"));
          let t = [];
          return e.replace(/[a-f0-9]{2}/gi, e => {
            t.push(parseInt(e, 16) / 255)
          }), {
            spaceId: "srgb",
            coords: t.slice(0, 3),
            alpha: t.slice(3)[0]
          }
        },
        serialize: (e, t, {
          collapse: r = true
        } = {}) => {
          t < 1 && e.push(t), e = e.map(e => Math.round(255 * e));
          let a = r && e.every(e => e % 17 == 0);
          return "#" + e.map(e => a ? (e / 17).toString(16) : e.toString(16).padStart(2, "0")).join("")
        }
      },
      keyword: {
        type: "custom",
        test: e => /^[a-z]+$/i.test(e),
        parse(e) {
          e = e.toLowerCase();
          let t = {
            spaceId: "srgb",
            coords: null,
            alpha: 1
          };
          if ("transparent" === e ? (t.coords = o.Z.black, t.alpha = 0) : t.coords = o.Z[e], t.coords) return t
        }
      }
    }
  })