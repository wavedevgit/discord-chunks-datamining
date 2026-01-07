/** Chunk was on web.js **/
/** chunk id: 503082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./415506.js"), require("./388685.js"), require("./35282.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk129508 = require("./129508.js"),
  Chunk921608 = require("./921608.js"),
  Chunk693824 = require("./693824.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = "undefined" != typeof OffscreenCanvas,
  p = 4,
  _ = 2176;
class m {
  reset() {
    this.context.clearRect(0, 0, this.MAX_ROW_WIDTH, this.MAX_HEIGHT), this.imageMap.clear(), this.nextX = 0, this.nextY = 0, this.tallestImageHeight = 0, this.needsReset = false
  }
  breakToNewRow() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    this.nextX = 0, this.nextY += this.tallestImageHeight + p, this.tallestImageHeight = 0, this.nextY > this.MAX_HEIGHT && (e ? this.reset() : this.needsReset = true)
  }
  getImage(e, t, n) {
    var r;
    let i = null != n ? n : "default",
      a = this.imageMap.get(e);
    if (null != a && null != a[i]) return a[i];
    if (this.needsReset && this.reset(), t.width > this.MAX_ROW_WIDTH || t.height > this.MAX_HEIGHT) throw Error("Image: ".concat(e, " is too wide to use with offscreen canvas. (").concat(t.width, " x ").concat(t.height));
    (this.nextX + t.width + p > this.MAX_ROW_WIDTH || this.nextY + t.height + p > this.MAX_HEIGHT) && this.breakToNewRow(true), this.context.save(), null != n && (this.context.filter = n), this.context.drawImage(t, this.nextX, this.nextY, t.width, t.height), this.context.restore();
    let o = null != (r = this.imageMap.get(e)) ? r : {},
      s = {
        x: this.nextX,
        y: this.nextY,
        w: t.width,
        h: t.height
      };
    return this.imageMap.set(e, d(c({}, o), {
      [i]: s
    })), t.height > this.tallestImageHeight && (this.tallestImageHeight = t.height), this.nextX += t.width + p, this.nextX > this.MAX_ROW_WIDTH && this.breakToNewRow(), s
  }
  constructor() {
    l(this, "MAX_ROW_WIDTH", _), l(this, "MAX_HEIGHT", _), l(this, "nextX", 0), l(this, "nextY", 0), l(this, "tallestImageHeight", 0), l(this, "needsReset", false), l(this, "canvas", true), l(this, "context", true), l(this, "imageMap", true), this.imageMap = new Map, f ? this.canvas = new OffscreenCanvas(this.MAX_ROW_WIDTH, this.MAX_HEIGHT) : (this.canvas = document.createElement("canvas"), this.canvas.width = this.MAX_ROW_WIDTH, this.canvas.height = this.MAX_HEIGHT);
    let e = this.canvas.getContext("2d", {
      alpha: true,
      willReadFrequently: false
    });
    if (null == e) throw Error("Couldn't construct context for offscreen canvas");
    this.context = e
  }
}
class h extends Chunk129508.Z {
  setupOffscreenCanvas() {
    try {
      this.offscreenCanvasCache = new m
    } catch (e) {
      this.offscreenCanvasCache = true
    }
  }
  getCanvasForExport() {
    return this.canvas
  }
  setFilter(e) {
    false === this._warnedAboutFilters && this.offscreenCanvasCache, super.setFilter(e)
  }
  setContextProperties() {
    null != this.context && (this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.font = "".concat(this.font.style, " ").concat(this.font.weight, " ").concat(this.font.size, "px ").concat(this.font.family.join(", ")))
  }
  setSize(e, t) {
    let {
      w: n,
      h: r
    } = e;
    null != this.context && null != t ? (this.canvas.width = n * t, this.canvas.height = r * t, this.context.scale(t, t)) : (this.canvas.width = n, this.canvas.height = r)
  }
  clearRect(e) {
    if (null == this.context) return;
    let {
      x: t,
      y: n,
      w: r,
      h: i
    } = e;
    this.context.clearRect(t, n, r, i)
  }
  restoreContext() {
    null != this.context && this.context.restore()
  }
  rotateAroundOriginAndDraw(e, t, n) {
    null != this.context && (this.context.save(), this.context.translate(e.x, e.y), this.context.rotate(t * Math.PI / 180), n(), this.context.restore())
  }
  drawRect(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
    if (null == this.context) return;
    let {
      x: r,
      y: i,
      w: a,
      h: o
    } = e;
    n && this.setContextProperties(), t ? this.context.fillRect(r, i, a, o) : this.context.strokeRect(r, i, a, o)
  }
  drawRoundedRect(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
      n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = !(arguments.length > 3) || true === arguments[3] || arguments[3];
    if (null == this.context) return;
    let {
      x: i,
      y: a,
      w: o,
      h: s
    } = e;
    r && this.setContextProperties(), this.context.beginPath(), this.context.roundRect(i, a, o, s, t), n ? this.context.fill() : this.context.stroke()
  }
  drawText(e, t, n) {
    var r, a;
    if (null == this.context) return;
    this.setContextProperties();
    let l = null != (r = t.w) ? r : this.canvas.width - t.x,
      c = this.context.measureText(e),
      u = false,
      d = this.font.size,
      f = (e, t) => {
        null != this.context && (n ? this.context.fillText(e, t.x, t.y) : this.context.strokeText(e, t.x, t.y))
      },
      p = e => {
        if (null == this.context || c.width <= o.F) return "";
        let t = "".concat(e);
        for (; c.width + o.F > l;) t = t.slice(0, false), c = this.context.measureText(t), u = true;
        return u && (t += "..."), t
      };
    if (this.font.truncate === s.GX.None && f(e, t), this.font.truncate === s.GX.Truncate && f(e = p(e), t), this.font.truncate === s.GX.Wrap) {
      let n = e.split(" "),
        r = 1 / 0,
        o = "",
        s = 0;
      for (null != t.h && (r = t.h / d, i()(r > 0, "DiscordCavas: boundingBox.h of ".concat(t.h, " results in 0 visible lines with font size of ").concat(d))); n.length > 0;)
        if ((c = this.context.measureText(o + " " + n[0])).width > l) {
          let e = false;
          if (s + 1 >= r && n.length > 0 && (e = true), "" !== o ? (f(e ? p(o + "...") : o, {
              x: t.x,
              y: t.y + d * s
            }), o = "") : f(p(null != (a = n.shift()) ? a : ""), {
              x: t.x,
              y: t.y + d * s
            }), e) break;
          s += 1
        } else o += " ".concat(n.shift()), 0 === n.length && f(o, {
          x: t.x,
          y: t.y + d * s
        })
    }
    return {
      x: t.x,
      y: t.y,
      w: c.width,
      h: c.actualBoundingBoxAscent + c.actualBoundingBoxDescent
    }
  }
  drawFormattedMessage(e, t, n) {
    this.font.truncate === s.GX.Wrap && console.warn("DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.");
    let r = this.font.weight,
      i = (e, t, n) => {
        let i;
        return "strong" === e.type && this.setFont({
          weight: 700
        }), i = Array.isArray(e.content) ? a(e.content, t, n) : this.drawText(e.content, t, n), this.setFont({
          weight: r
        }), i
      },
      a = (e, t, n) => {
        let r = 0;
        return e.forEach(e => {
          let {
            x: a,
            y: o,
            w: s,
            h: l
          } = t, c = null != s ? s - r : true, u = i(e, {
            x: a + r,
            y: o,
            w: c,
            h: l
          }, n);
          null != u && (r += u.w)
        }), {
          x: t.x + r,
          y: t.y,
          w: r,
          h: this.font.size
        }
      };
    Array.isArray(e) ? a(e, t, n) : i(e, t, n)
  }
  drawImage(e, t, n) {
    let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {
      fillMode: s.JU.Stretch
    };
    i()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized.");
    let {
      fillMode: a
    } = r;
    if (null == this.context) return s.vP.Failure;
    this.setContextProperties();
    let o = this.assetMap.get(e);
    if (null == o) return s.vP.ImageNotLoaded;
    if (null != n) {
      if (a === s.JU.Contain) {
        let r, i = {
            w: o.width,
            h: o.height
          },
          a = +(i.w / i.h).toFixed(1);
        if (+(n.w / n.h).toFixed(1) > a) {
          let e = n.h * a;
          r = {
            x: t.x + (n.w - e) / 2,
            y: t.y,
            w: e,
            h: n.h
          }
        } else {
          let e = n.w / a;
          r = {
            x: t.x,
            y: t.y + (n.h - e) / 2,
            w: n.w,
            h: e
          }
        }
        return this.drawCroppedImage(e, {
          x: 0,
          y: 0,
          w: i.w,
          h: i.h
        }, {
          x: r.x,
          y: r.y,
          w: r.w,
          h: r.h
        }), s.vP.Success
      }
      if (a === s.JU.Cover) {
        var l, u, f, p;
        let i, a = {
            w: o.width,
            h: o.height
          },
          _ = +(a.w / a.h).toFixed(1),
          m = +(n.w / n.h).toFixed(1);
        if (m > _) {
          let e = a.w / m;
          i = d(c({}, {
            x: 0,
            y: (a.h - e) * (null != (u = null == r || null == (l = r.focus) ? true : l.y) ? u : .5)
          }), {
            w: o.width,
            h: e
          })
        } else {
          let e = a.h * m;
          i = d(c({}, {
            x: (o.width - e) * (null != (p = null == r || null == (f = r.focus) ? true : f.x) ? p : .5),
            y: 0
          }), {
            w: e,
            h: o.height
          })
        }
        return this.drawCroppedImage(e, i, {
          x: t.x,
          y: t.y,
          w: n.w,
          h: n.h
        }), s.vP.Success
      }
      if (null != this.offscreenCanvasCache) return this.drawCachedImage(e, t, n);
      this.context.drawImage(o, t.x, t.y, n.w, n.h)
    } else {
      if (null != this.offscreenCanvasCache) return this.drawCachedImage(e, t);
      this.context.drawImage(o, t.x, t.y)
    }
    return s.vP.Success
  }
  drawRoundedImage(e, t, n, r, i) {
    if (null == this.context) return s.vP.Failure;
    let {
      x: a,
      y: o
    } = t, {
      w: l,
      h: c
    } = n;
    this.context.save();
    let u = new Path2D;
    u.roundRect(a, o, l, c, r), this.context.clip(u);
    let d = this.drawImage(e, t, n, i);
    return this.restoreContext(), d
  }
  drawCroppedImage(e, t, n) {
    var r;
    if (null != this.offscreenCanvasCache && this.drawCroppedCachedImage(e, t, n), null == this.context) return s.vP.Failure;
    let i = null == (r = this.assetMap) ? true : r.get(e);
    if (null == i) return s.vP.ImageNotLoaded;
    if (null != this.offscreenCanvasCache) return this.drawCroppedCachedImage(e, t, n);
    {
      let {
        x: e,
        y: r,
        w: a,
        h: o
      } = t, {
        x: s,
        y: l,
        w: c,
        h: u
      } = n;
      this.context.drawImage(i, e, r, a, o, s, l, c, u)
    }
    return s.vP.Success
  }
  drawCachedImage(e, t, n) {
    var r, a;
    if (i()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized."), i()(null != this.offscreenCanvasCache, "DiscordCavas: `drawCachedImage` requires an offscreen canvas being initialized."), null == this.context) return s.vP.Failure;
    let o = this.assetMap.get(e);
    if (null == o) return s.vP.ImageNotLoaded;
    let l = this.offscreenCanvasCache.getImage(e.toString(), o, this.getFilterString());
    return null == l ? s.vP.Failure : (this.context.drawImage(this.offscreenCanvasCache.canvas, l.x, l.y, l.w, l.h, t.x, t.y, null != (r = null == n ? true : n.w) ? r : l.w, null != (a = null == n ? true : n.h) ? a : l.h), s.vP.Success)
  }
  drawCroppedCachedImage(e, t, n) {
    if (i()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized."), i()(null != this.offscreenCanvasCache, "DiscordCavas: `drawCachedImage` requires an offscreen canvas being initialized."), null == this.context) return s.vP.Failure;
    let r = this.assetMap.get(e);
    if (null == r) return s.vP.ImageNotLoaded;
    let a = this.offscreenCanvasCache.getImage(e.toString(), r, this.getFilterString());
    if (null == a) return s.vP.Failure;
    let {
      x: o,
      y: l,
      w: c,
      h: u
    } = t, {
      x: d,
      y: f,
      w: p,
      h: _
    } = n;
    return this.context.drawImage(this.offscreenCanvasCache.canvas, a.x + o, a.y + l, c, u, d, f, p, _), s.vP.Success
  }
  drawPath(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 1;
    if (null == this.context) return s.vP.Failure;
    this.setContextProperties(), this.context.save();
    let i = new Path2D(e);
    return this.context.translate(t.x, t.y), this.context.scale(r, r), n ? this.context.fill(i, "evenodd") : this.context.stroke(i), this.restoreContext(), s.vP.Success
  }
  setGradientFillStyle(e, t, n) {
    if (null == this.context) return;
    let r = this.context.createLinearGradient(t.x, t.y, n.x, n.y);
    for (let {
        color: t,
        stop: n
      }
      of e) r.addColorStop(n, t);
    this.context.fillStyle = r
  }
  drawGradientRect(e, t, n, r) {
    return null == this.context ? s.vP.Failure : (this.setGradientFillStyle(e, t, n), this.drawRect(r, true, false), s.vP.Success)
  }
  drawRoundedGradientRect(e, t, n, r, i) {
    return null == this.context ? s.vP.Failure : (this.setGradientFillStyle(e, t, n), this.drawRoundedRect(r, i, true, false), s.vP.Success)
  }
  clip(e, t) {
    if (null == this.context) return;
    this.context.save();
    let {
      x: n,
      y: r
    } = e, i = new Path2D(t);
    this.context.translate(n, r), this.context.clip(i)
  }
  clipRect(e, t) {
    if (null == this.context) return;
    this.context.save();
    let {
      x: n,
      y: r,
      w: i,
      h: a
    } = e;
    if (t) {
      let e = new Path2D;
      e.moveTo(0, 0), e.lineTo(this.canvas.width, 0), e.lineTo(this.canvas.width, this.canvas.height), e.lineTo(0, this.canvas.height), e.lineTo(0, 0), e.closePath(), e.rect(n, r, i, a), this.context.clip(e, "evenodd")
    } else {
      let e = new Path2D;
      e.rect(n, r, i, a), this.context.clip(e)
    }
  }
  clipRoundedRect(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
      n = arguments.length > 2 ? arguments[2] : true;
    if (null == this.context) return;
    this.context.save();
    let {
      x: r,
      y: i,
      w: a,
      h: o
    } = e;
    if (n) {
      let e = new Path2D;
      e.moveTo(0, 0), e.lineTo(this.canvas.width, 0), e.lineTo(this.canvas.width, this.canvas.height), e.lineTo(0, this.canvas.height), e.lineTo(0, 0), e.closePath(), e.roundRect(r, i, a, o, t), this.context.clip(e, "evenodd")
    } else {
      let e = new Path2D;
      e.roundRect(r, i, a, o, t), this.context.clip(e)
    }
  }
  constructor(e, t) {
    super(e, t), l(this, "canvas", true), l(this, "context", true), l(this, "offscreenCanvasCache", true), l(this, "_warnedAboutFilters", false), this.canvas = e, this.context = this.canvas.getContext("2d"), null != this.context && (this.context.imageSmoothingQuality = "high")
  }
}