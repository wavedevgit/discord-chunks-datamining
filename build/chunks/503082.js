/** Chunk was on 78447 (e62b456706a3d293.js) **/
i.d(e, {
  Z: () => f
}), i(411104), i(47120), i(301563);
var s = i(512722),
  n = i.n(s),
  a = i(129508),
  r = i(921608),
  o = i(693824);

function l(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = i, t
}

function h(t) {
  for (var e = 1; e < arguments.length; e++) {
    var i = null != arguments[e] ? arguments[e] : {},
      s = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
      return Object.getOwnPropertyDescriptor(i, t).enumerable
    }))), s.forEach(function(e) {
      l(t, e, i[e])
    })
  }
  return t
}

function c(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(t);
      i.push.apply(i, s)
    }
    return i
  })(Object(e)).forEach(function(i) {
    Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i))
  }), t
}
let u = "undefined" != typeof OffscreenCanvas;
class d {
  reset() {
    this.context.clearRect(0, 0, this.MAX_ROW_WIDTH, this.MAX_HEIGHT), this.imageMap.clear(), this.nextX = 0, this.nextY = 0, this.tallestImageHeight = 0, this.needsReset = !1
  }
  breakToNewRow() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    this.nextX = 0, this.nextY += this.tallestImageHeight + 4, this.tallestImageHeight = 0, this.nextY > this.MAX_HEIGHT && (t ? this.reset() : this.needsReset = !0)
  }
  getImage(t, e, i) {
    var s;
    let n = null != i ? i : "default",
      a = this.imageMap.get(t);
    if (null != a && null != a[n]) return a[n];
    if (this.needsReset && this.reset(), e.width > this.MAX_ROW_WIDTH || e.height > this.MAX_HEIGHT) throw Error("Image: ".concat(t, " is too wide to use with offscreen canvas. (").concat(e.width, " x ").concat(e.height));
    (this.nextX + e.width + 4 > this.MAX_ROW_WIDTH || this.nextY + e.height + 4 > this.MAX_HEIGHT) && this.breakToNewRow(!0), this.context.save(), null != i && (this.context.filter = i), this.context.drawImage(e, this.nextX, this.nextY, e.width, e.height), this.context.restore();
    let r = null !== (s = this.imageMap.get(t)) && void 0 !== s ? s : {},
      o = {
        x: this.nextX,
        y: this.nextY,
        w: e.width,
        h: e.height
      };
    return this.imageMap.set(t, c(h({}, r), {
      [n]: o
    })), e.height > this.tallestImageHeight && (this.tallestImageHeight = e.height), this.nextX += e.width + 4, this.nextX > this.MAX_ROW_WIDTH && this.breakToNewRow(), o
  }
  constructor() {
    l(this, "MAX_ROW_WIDTH", 2176), l(this, "MAX_HEIGHT", 2176), l(this, "nextX", 0), l(this, "nextY", 0), l(this, "tallestImageHeight", 0), l(this, "needsReset", !1), l(this, "canvas", void 0), l(this, "context", void 0), l(this, "imageMap", void 0), this.imageMap = new Map, u ? this.canvas = new OffscreenCanvas(this.MAX_ROW_WIDTH, this.MAX_HEIGHT) : (this.canvas = document.createElement("canvas"), this.canvas.width = this.MAX_ROW_WIDTH, this.canvas.height = this.MAX_HEIGHT);
    let t = this.canvas.getContext("2d", {
      alpha: !0,
      willReadFrequently: !1
    });
    if (null == t) throw Error("Couldn't construct context for offscreen canvas");
    this.context = t
  }
}
class f extends a.Z {
  setupOffscreenCanvas() {
    try {
      this.offscreenCanvasCache = new d
    } catch (t) {
      this.offscreenCanvasCache = void 0
    }
  }
  getCanvasForExport() {
    return this.canvas
  }
  setFilter(t) {
    !1 === this._warnedAboutFilters && this.offscreenCanvasCache, super.setFilter(t)
  }
  setContextProperties() {
    null != this.context && (this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.font = "".concat(this.font.style, " ").concat(this.font.weight, " ").concat(this.font.size, "px ").concat(this.font.family.join(", ")))
  }
  setSize(t, e) {
    let {
      w: i,
      h: s
    } = t;
    null != this.context && null != e ? (this.canvas.width = i * e, this.canvas.height = s * e, this.context.scale(e, e)) : (this.canvas.width = i, this.canvas.height = s)
  }
  clearRect(t) {
    if (null == this.context) return;
    let {
      x: e,
      y: i,
      w: s,
      h: n
    } = t;
    this.context.clearRect(e, i, s, n)
  }
  restoreContext() {
    null != this.context && this.context.restore()
  }
  rotateAroundOriginAndDraw(t, e, i) {
    null != this.context && (this.context.save(), this.context.translate(t.x, t.y), this.context.rotate(e * Math.PI / 180), i(), this.context.restore())
  }
  drawRect(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (null == this.context) return;
    let {
      x: s,
      y: n,
      w: a,
      h: r
    } = t;
    i && this.setContextProperties(), e ? this.context.fillRect(s, n, a, r) : this.context.strokeRect(s, n, a, r)
  }
  drawRoundedRect(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (null == this.context) return;
    let {
      x: n,
      y: a,
      w: r,
      h: o
    } = t;
    s && this.setContextProperties(), this.context.beginPath(), this.context.roundRect(n, a, r, o, e), i ? this.context.fill() : this.context.stroke()
  }
  drawText(t, e, i) {
    var s, a;
    if (null == this.context) return;
    this.setContextProperties();
    let l = null !== (s = e.w) && void 0 !== s ? s : this.canvas.width - e.x,
      h = this.context.measureText(t),
      c = !1,
      u = this.font.size,
      d = (t, e) => {
        null != this.context && (i ? this.context.fillText(t, e.x, e.y) : this.context.strokeText(t, e.x, e.y))
      },
      f = t => {
        if (null == this.context || h.width <= r.F) return "";
        let e = "".concat(t);
        for (; h.width + r.F > l;) e = e.slice(0, -4), h = this.context.measureText(e), c = !0;
        return c && (e += "..."), e
      };
    if (this.font.truncate === o.GX.None && d(t, e), this.font.truncate === o.GX.Truncate && d(t = f(t), e), this.font.truncate === o.GX.Wrap) {
      let i = t.split(" "),
        s = 1 / 0,
        r = "",
        o = 0;
      for (null != e.h && (s = e.h / u, n()(s > 0, "DiscordCavas: boundingBox.h of ".concat(e.h, " results in 0 visible lines with font size of ").concat(u))); i.length > 0;)
        if ((h = this.context.measureText(r + " " + i[0])).width > l) {
          let t = !1;
          if (o + 1 >= s && i.length > 0 && (t = !0), "" !== r ? (d(t ? f(r + "...") : r, {
              x: e.x,
              y: e.y + u * o
            }), r = "") : d(f(null !== (a = i.shift()) && void 0 !== a ? a : ""), {
              x: e.x,
              y: e.y + u * o
            }), t) break;
          o += 1
        } else r += " ".concat(i.shift()), 0 === i.length && d(r, {
          x: e.x,
          y: e.y + u * o
        })
    }
    return {
      x: e.x,
      y: e.y,
      w: h.width,
      h: h.actualBoundingBoxAscent + h.actualBoundingBoxDescent
    }
  }
  drawFormattedMessage(t, e, i) {
    this.font.truncate === o.GX.Wrap && console.warn("DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.");
    let s = this.font.weight,
      n = (t, e, i) => {
        let n;
        return "strong" === t.type && this.setFont({
          weight: 700
        }), n = Array.isArray(t.content) ? a(t.content, e, i) : this.drawText(t.content, e, i), this.setFont({
          weight: s
        }), n
      },
      a = (t, e, i) => {
        let s = 0;
        return t.forEach(t => {
          let {
            x: a,
            y: r,
            w: o,
            h: l
          } = e, h = null != o ? o - s : void 0, c = n(t, {
            x: a + s,
            y: r,
            w: h,
            h: l
          }, i);
          null != c && (s += c.w)
        }), {
          x: e.x + s,
          y: e.y,
          w: s,
          h: this.font.size
        }
      };
    Array.isArray(t) ? a(t, e, i) : n(t, e, i)
  }
  drawImage(t, e, i) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
      fillMode: o.JU.Stretch
    };
    n()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized.");
    let {
      fillMode: a
    } = s;
    if (null == this.context) return o.vP.Failure;
    this.setContextProperties();
    let r = this.assetMap.get(t);
    if (null == r) return o.vP.ImageNotLoaded;
    if (null != i) {
      if (a === o.JU.Contain) {
        let s;
        let n = {
            w: r.width,
            h: r.height
          },
          a = +(n.w / n.h).toFixed(1);
        if (+(i.w / i.h).toFixed(1) > a) {
          let t = i.h * a;
          s = {
            x: e.x + (i.w - t) / 2,
            y: e.y,
            w: t,
            h: i.h
          }
        } else {
          let t = i.w / a;
          s = {
            x: e.x,
            y: e.y + (i.h - t) / 2,
            w: i.w,
            h: t
          }
        }
        return this.drawCroppedImage(t, {
          x: 0,
          y: 0,
          w: n.w,
          h: n.h
        }, {
          x: s.x,
          y: s.y,
          w: s.w,
          h: s.h
        }), o.vP.Success
      }
      if (a === o.JU.Cover) {
        var l, u, d, f;
        let n;
        let a = {
            w: r.width,
            h: r.height
          },
          v = +(a.w / a.h).toFixed(1),
          x = +(i.w / i.h).toFixed(1);
        if (x > v) {
          let t = a.w / x;
          n = c(h({}, {
            x: 0,
            y: (a.h - t) * (null !== (u = null == s ? void 0 : null === (l = s.focus) || void 0 === l ? void 0 : l.y) && void 0 !== u ? u : .5)
          }), {
            w: r.width,
            h: t
          })
        } else {
          let t = a.h * x;
          n = c(h({}, {
            x: (r.width - t) * (null !== (f = null == s ? void 0 : null === (d = s.focus) || void 0 === d ? void 0 : d.x) && void 0 !== f ? f : .5),
            y: 0
          }), {
            w: t,
            h: r.height
          })
        }
        return this.drawCroppedImage(t, n, {
          x: e.x,
          y: e.y,
          w: i.w,
          h: i.h
        }), o.vP.Success
      }
      if (null != this.offscreenCanvasCache) return this.drawCachedImage(t, e, i);
      this.context.drawImage(r, e.x, e.y, i.w, i.h)
    } else {
      if (null != this.offscreenCanvasCache) return this.drawCachedImage(t, e);
      this.context.drawImage(r, e.x, e.y)
    }
    return o.vP.Success
  }
  drawRoundedImage(t, e, i, s, n) {
    if (null == this.context) return o.vP.Failure;
    let {
      x: a,
      y: r
    } = e, {
      w: l,
      h
    } = i;
    this.context.save();
    let c = new Path2D;
    c.roundRect(a, r, l, h, s), this.context.clip(c);
    let u = this.drawImage(t, e, i, n);
    return this.restoreContext(), u
  }
  drawCroppedImage(t, e, i) {
    var s;
    if (null != this.offscreenCanvasCache && this.drawCroppedCachedImage(t, e, i), null == this.context) return o.vP.Failure;
    let n = null === (s = this.assetMap) || void 0 === s ? void 0 : s.get(t);
    if (null == n) return o.vP.ImageNotLoaded;
    if (null != this.offscreenCanvasCache) return this.drawCroppedCachedImage(t, e, i);
    {
      let {
        x: t,
        y: s,
        w: a,
        h: r
      } = e, {
        x: o,
        y: l,
        w: h,
        h: c
      } = i;
      this.context.drawImage(n, t, s, a, r, o, l, h, c)
    }
    return o.vP.Success
  }
  drawCachedImage(t, e, i) {
    var s, a;
    if (n()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized."), n()(null != this.offscreenCanvasCache, "DiscordCavas: `drawCachedImage` requires an offscreen canvas being initialized."), null == this.context) return o.vP.Failure;
    let r = this.assetMap.get(t);
    if (null == r) return o.vP.ImageNotLoaded;
    let l = this.offscreenCanvasCache.getImage(t.toString(), r, this.getFilterString());
    return null == l ? o.vP.Failure : (this.context.drawImage(this.offscreenCanvasCache.canvas, l.x, l.y, l.w, l.h, e.x, e.y, null !== (s = null == i ? void 0 : i.w) && void 0 !== s ? s : l.w, null !== (a = null == i ? void 0 : i.h) && void 0 !== a ? a : l.h), o.vP.Success)
  }
  drawCroppedCachedImage(t, e, i) {
    if (n()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized."), n()(null != this.offscreenCanvasCache, "DiscordCavas: `drawCachedImage` requires an offscreen canvas being initialized."), null == this.context) return o.vP.Failure;
    let s = this.assetMap.get(t);
    if (null == s) return o.vP.ImageNotLoaded;
    let a = this.offscreenCanvasCache.getImage(t.toString(), s, this.getFilterString());
    if (null == a) return o.vP.Failure;
    let {
      x: r,
      y: l,
      w: h,
      h: c
    } = e, {
      x: u,
      y: d,
      w: f,
      h: v
    } = i;
    return this.context.drawImage(this.offscreenCanvasCache.canvas, a.x + r, a.y + l, h, c, u, d, f, v), o.vP.Success
  }
  drawPath(t, e) {
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
    if (null == this.context) return o.vP.Failure;
    this.setContextProperties(), this.context.save();
    let n = new Path2D(t);
    return this.context.translate(e.x, e.y), this.context.scale(s, s), i ? this.context.fill(n, "evenodd") : this.context.stroke(n), this.restoreContext(), o.vP.Success
  }
  setGradientFillStyle(t, e, i) {
    if (null == this.context) return;
    let s = this.context.createLinearGradient(e.x, e.y, i.x, i.y);
    for (let {
        color: e,
        stop: i
      }
      of t) s.addColorStop(i, e);
    this.context.fillStyle = s
  }
  drawGradientRect(t, e, i, s) {
    return null == this.context ? o.vP.Failure : (this.setGradientFillStyle(t, e, i), this.drawRect(s, !0, !1), o.vP.Success)
  }
  drawRoundedGradientRect(t, e, i, s, n) {
    return null == this.context ? o.vP.Failure : (this.setGradientFillStyle(t, e, i), this.drawRoundedRect(s, n, !0, !1), o.vP.Success)
  }
  clip(t, e) {
    if (null == this.context) return;
    this.context.save();
    let {
      x: i,
      y: s
    } = t, n = new Path2D(e);
    this.context.translate(i, s), this.context.clip(n)
  }
  clipRect(t, e) {
    if (null == this.context) return;
    this.context.save();
    let {
      x: i,
      y: s,
      w: n,
      h: a
    } = t;
    if (e) {
      let t = new Path2D;
      t.moveTo(0, 0), t.lineTo(this.canvas.width, 0), t.lineTo(this.canvas.width, this.canvas.height), t.lineTo(0, this.canvas.height), t.lineTo(0, 0), t.closePath(), t.rect(i, s, n, a), this.context.clip(t, "evenodd")
    } else {
      let t = new Path2D;
      t.rect(i, s, n, a), this.context.clip(t)
    }
  }
  clipRoundedRect(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      i = arguments.length > 2 ? arguments[2] : void 0;
    if (null == this.context) return;
    this.context.save();
    let {
      x: s,
      y: n,
      w: a,
      h: r
    } = t;
    if (i) {
      let t = new Path2D;
      t.moveTo(0, 0), t.lineTo(this.canvas.width, 0), t.lineTo(this.canvas.width, this.canvas.height), t.lineTo(0, this.canvas.height), t.lineTo(0, 0), t.closePath(), t.roundRect(s, n, a, r, e), this.context.clip(t, "evenodd")
    } else {
      let t = new Path2D;
      t.roundRect(s, n, a, r, e), this.context.clip(t)
    }
  }
  constructor(t, e) {
    super(t, e), l(this, "canvas", void 0), l(this, "context", void 0), l(this, "offscreenCanvasCache", void 0), l(this, "_warnedAboutFilters", !1), this.canvas = t, this.context = this.canvas.getContext("2d"), null != this.context && (this.context.imageSmoothingQuality = "high")
  }
}