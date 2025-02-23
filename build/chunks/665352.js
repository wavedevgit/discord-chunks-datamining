/** Chunk was on 38597 (284c18b018f79f5f.js) **/
"use strict";
r.d(t, {
  Z: () => i
});
var a = r(37484),
  n = r(629990),
  s = r(527628),
  o = r(181568);
class i {
  constructor(e) {
    this.id = e.id, this.name = e.name, this.base = e.base ? i.get(e.base) : null, this.aliases = e.aliases, this.base && (this.fromBase = e.fromBase, this.toBase = e.toBase);
    let t = e.coords ?? this.base.coords;
    for (let e in t) "name" in t[e] || (t[e].name = e);
    this.coords = t;
    let r = e.white ?? this.base.white ?? "D65";
    for (let t in this.white = (0, n.db)(r), this.formats = e.formats ?? {}, this.formats) {
      let e = this.formats[t];
      e.type ||= "function", e.name ||= t
    }
    this.formats.color?.id || (this.formats.color = {
      ...this.formats.color ?? {},
      id: e.cssId || this.id
    }), e.gamutSpace ? this.gamutSpace = "self" === e.gamutSpace ? this : i.get(e.gamutSpace) : this.isPolar ? this.gamutSpace = this.base : this.gamutSpace = this, this.gamutSpace.isUnbounded && (this.inGamut = (e, t) => !0), this.referred = e.referred, Object.defineProperty(this, "path", {
      value: (function(e) {
        let t = [e];
        for (let r = e; r = r.base;) t.push(r);
        return t
      })(this).reverse(),
      writable: !1,
      enumerable: !0,
      configurable: !0
    }), s.Z.run("colorspace-init-end", this)
  }
  inGamut(e, {
    epsilon: t = 75e-6
  } = {}) {
    if (!this.equals(this.gamutSpace)) return e = this.to(this.gamutSpace, e), this.gamutSpace.inGamut(e, {
      epsilon: t
    });
    let r = Object.values(this.coords);
    return e.every((e, a) => {
      let n = r[a];
      if ("angle" !== n.type && n.range) {
        if (Number.isNaN(e)) return !0;
        let [r, a] = n.range;
        return (void 0 === r || e >= r - t) && (void 0 === a || e <= a + t)
      }
      return !0
    })
  }
  get isUnbounded() {
    return Object.values(this.coords).every(e => !("range" in e))
  }
  get cssId() {
    return this.formats?.color?.id || this.id
  }
  get isPolar() {
    for (let e in this.coords)
      if ("angle" === this.coords[e].type) return !0;
    return !1
  }
  getFormat(e) {
    let t;
    return "object" == typeof e ? e = c(e, this) : (t = "default" === e ? Object.values(this.formats)[0] : this.formats[e]) ? t = c(t, this) : null
  }
  equals(e) {
    return !!e && (this === e || this.id === e || this.id === e.id)
  }
  to(e, t) {
    let r, a;
    if (1 == arguments.length) {
      let r = (0, o.Z)(e);
      [e, t] = [r.space, r.coords]
    }
    if (e = i.get(e), this.equals(e)) return t;
    t = t.map(e => Number.isNaN(e) ? 0 : e);
    let n = this.path,
      s = e.path;
    for (let e = 0; e < n.length; e++)
      if (n[e].equals(s[e])) r = n[e], a = e;
      else break;
    if (!r) throw Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);
    for (let e = n.length - 1; e > a; e--) t = n[e].toBase(t);
    for (let e = a + 1; e < s.length; e++) t = s[e].fromBase(t);
    return t
  }
  from(e, t) {
    if (1 == arguments.length) {
      let r = (0, o.Z)(e);
      [e, t] = [r.space, r.coords]
    }
    return (e = i.get(e)).to(this, t)
  }
  toString() {
    return `${this.name} (${this.id})`
  }
  getMinCoords() {
    let e = [];
    for (let t in this.coords) {
      let r = this.coords[t],
        a = r.range || r.refRange;
      e.push(a?.min ?? 0)
    }
    return e
  }
  static registry = {};
  static get all() {
    return [...new Set(Object.values(i.registry))]
  }
  static register(e, t) {
    if (1 == arguments.length && (t = arguments[0], e = t.id), t = this.get(t), this.registry[e] && this.registry[e] !== t) throw Error(`Duplicate color space registration: '${e}'`);
    if (this.registry[e] = t, 1 == arguments.length && t.aliases)
      for (let e of t.aliases) this.register(e, t);
    return t
  }
  static get(e, ...t) {
    if (!e || e instanceof i) return e;
    if ("string" === (0, a.dt)(e)) {
      let t = i.registry[e.toLowerCase()];
      if (!t) throw TypeError(`No color space found with id = "${e}"`);
      return t
    }
    if (t.length) return i.get(...t);
    throw TypeError(`${e} is not a valid color space`)
  }
  static resolveCoord(e, t) {
    let r, n, s = (0, a.dt)(e);
    if ("string" === s ? e.includes(".") ? [r, n] = e.split(".") : [r, n] = [, e] : Array.isArray(e) ? [r, n] = e : (r = e.space, n = e.coordId), (r = i.get(r)) || (r = t), !r) throw TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);
    if ("number" === (s = (0, a.dt)(n)) || "string" === s && n >= 0) {
      let e = Object.entries(r.coords)[n];
      if (e) return {
        space: r,
        id: e[0],
        index: n,
        ...e[1]
      }
    }
    r = i.get(r);
    let o = n.toLowerCase(),
      c = 0;
    for (let e in r.coords) {
      let t = r.coords[e];
      if (e.toLowerCase() === o || t.name?.toLowerCase() === o) return {
        space: r,
        id: e,
        index: c,
        ...t
      };
      c++
    }
    throw TypeError(`No "${n}" coordinate found in ${r.name}. Its coordinates are: ${Object.keys(r.coords).join(", ")}`)
  }
  static DEFAULT_FORMAT = {
    type: "functions",
    name: "color"
  }
}

function c(e, {
  coords: t
} = {}) {
  if (e.coords && !e.coordGrammar) {
    e.type ||= "function", e.name ||= "color", e.coordGrammar = (0, a.T7)(e.coords);
    let r = Object.entries(t).map(([t, r], a) => {
      let n = e.coordGrammar[a][0],
        s = r.range || r.refRange,
        o = n.range,
        i = "";
      return "<percentage>" == n ? (o = [0, 100], i = "%") : "<angle>" == n && (i = "deg"), {
        fromRange: s,
        toRange: o,
        suffix: i
      }
    });
    e.serializeCoords = (e, t) => e.map((e, n) => {
      let {
        fromRange: s,
        toRange: o,
        suffix: i
      } = r[n];
      return s && o && (e = (0, a.KK)(s, o, e)), e = (0, a.zL)(e, {
        precision: t,
        unit: i
      })
    })
  }
  return e
}