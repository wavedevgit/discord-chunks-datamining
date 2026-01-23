/** Chunk was on web.js **/
/** chunk id: 941242, original params: e,t,n (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.FormatBuilder = true, exports.bindFormatValuesWithBuilder = l, exports.bindFormatValues = c;
let Chunk450678 = require("./450678.js"),
  Chunk503574 = require("./503574.js");

function a(e) {
  return "$" === e[0]
}
class s {
  constructor(e) {
    this.context = e
  }
}
exports.FormatBuilder = s;
class o extends Error {
  constructor(e, t, n) {
    super(`No value for variable '${e}' was provided for the localized message '${t}'`), this.variableName = e, this.originalMessage = t, this.nodeType = n
  }
}

function l(e) {
  var t;
  let {
    builder: n,
    originalMessage: s,
    nodes: u,
    locales: d,
    values: f,
    dataFormatters: p,
    formatConfig: _,
    currentPluralValue: h,
    keyPrefix: m
  } = e;
  if (1 === u.length && "string" == typeof u[0]) return void n.pushLiteralText(u[0]);
  for (let e = 0; e < u.length; e++) {
    let g = u[e];
    if ("string" == typeof g) {
      n.pushLiteralText(g);
      continue
    }
    let E = g[0];
    if (E === i.FormatJsNodeType.Pound) {
      if ("number" == typeof h) {
        let e = p.formatNumber(h);
        n.pushLiteralText(e)
      }
      continue
    }
    let y = g[1];
    if (!(y in f) && !a(y)) throw new o(y, s, E);
    let b = f[y];
    switch (E) {
      case i.FormatJsNodeType.Argument:
        "object" == typeof b || "function" == typeof b ? n.pushObject(b) : n.pushLiteralText(String(b));
        break;
      case i.FormatJsNodeType.Date: {
        let e = g[2],
          t = e in _.date ? _.date[e] : null != e ? (0, r.parseDateTimeSkeleton)(e) : true;
        n.pushLiteralText(p.formatDate(b, t));
        break
      }
      case i.FormatJsNodeType.Time: {
        let e = g[2],
          t = e in _.time ? _.time[e] : null != e ? (0, r.parseDateTimeSkeleton)(e) : true;
        n.pushLiteralText(p.formatTime(b, t));
        break
      }
      case i.FormatJsNodeType.Number: {
        let e = g[2],
          i = e in _.number ? _.number[e] : null != e ? (0, r.parseNumberSkeleton)((0, r.parseNumberSkeletonFromString)(e)) : true,
          a = "number" != typeof b ? b : b * (null != (t = null == i ? true : i.scale) ? t : 1);
        n.pushLiteralText(p.formatNumber(a, i));
        break
      }
      case i.FormatJsNodeType.Tag: {
        let t = g[2],
          r = g[3],
          i = c({
            Builder: n.constructor,
            nodes: t,
            locales: d,
            dataFormatters: p,
            formatConfig: _,
            values: f,
            currentPluralValue: h,
            keyPrefix: `${m}.${e}`
          }),
          s = null != r ? c({
            Builder: n.constructor,
            nodes: r,
            locales: d,
            dataFormatters: p,
            formatConfig: _,
            values: f,
            currentPluralValue: h,
            keyPrefix: `${m}.${e}-control`
          }) : [];
        if (a(y)) n.pushRichTextTag(y, i, s);
        else {
          if ("function" != typeof b) throw `expected a function type for a Tag formatting value, ${y}. got ${typeof b}: ${b}`;
          let t = b(i, `${m}.${e}`);
          for (let e of t = Array.isArray(t) ? t : [t]) "string" == typeof e ? n.pushLiteralText(e) : n.pushObject(e)
        }
        break
      }
      case i.FormatJsNodeType.Select: {
        let t = b,
          r = g[2],
          i = t in r ? r[t] : r.other;
        if (null == i) throw `${t} is not a known option for select value ${y}. Valid options are ${Object.keys(r).join(", ")}`;
        l({
          builder: n,
          nodes: i,
          locales: d,
          dataFormatters: p,
          formatConfig: _,
          values: f,
          keyPrefix: `${m}.${e}`
        });
        break
      }
      case i.FormatJsNodeType.Plural: {
        let t = g[2],
          r = g[3],
          i = g[4],
          a = (() => {
            var e;
            let n = `=${b}`;
            return n in t ? t[n] : null != (e = t[p.getPluralRules({
              type: i
            }).select(b - (null != r ? r : 0))]) ? e : t.other
          })();
        if (null == a) throw `${b} is not a known option for plural value ${y}. Valid options are ${Object.keys(t).join(", ")}`;
        l({
          builder: n,
          nodes: a,
          locales: d,
          dataFormatters: p,
          formatConfig: _,
          values: f,
          currentPluralValue: b - (null != r ? r : 0),
          keyPrefix: `${m}.${e}`
        })
      }
    }
  }
}

function c(e) {
  let {
    Builder: t,
    originalMessage: n,
    nodes: r,
    locales: i,
    dataFormatters: a,
    formatConfig: s,
    values: o,
    currentPluralValue: c,
    keyPrefix: u
  } = e, d = new t({
    keyPrefix: u
  });
  return "string" == typeof r ? d.pushLiteralText(r) : l({
    builder: d,
    originalMessage: n,
    nodes: r,
    locales: i,
    dataFormatters: a,
    formatConfig: s,
    values: o,
    currentPluralValue: c,
    keyPrefix: u
  }), d.finish()
}