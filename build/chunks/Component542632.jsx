/** Chunk was on web.js **/
/** chunk id: 542632, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./361932.js"), require("./187205.js"), require("./388685.js"), require("./539854.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk572692 = require("./572692.js"),
  Chunk710959 = require("./710959.js"),
  Chunk225300 = require("./225300.js"),
  Chunk627578 = require("./627578.js"),
  Chunk281861 = require("./281861.js"),
  Chunk49693 = require("./49693.js"),
  Chunk192157 = require("./192157.js"),
  Chunk392481 = require("./392481.js"),
  Chunk497502 = require("./497502.js"),
  Chunk493398 = require("./493398.js"),
  Chunk67924 = require("./67924.js"),
  Chunk196958 = require("./196958.js"),
  Chunk635852 = require("./635852.js"),
  Chunk913527 = require("./913527.js"),
  b = require.n(Chunk913527),
  Chunk588468 = require("./588468.jsx"),
  Chunk660199 = require("./660199.js"),
  Chunk706454 = require("./706454.js"),
  Chunk877565 = require("./877565.jsx"),
  Chunk590921 = require("./590921.js"),
  Chunk388032 = require("./388032.jsx");
let C = ["YYYYMMDD", "YYYY-MM-DD", "LL", "L", "MMMM Do YYYY", "MMMM Do YY", "MMMM Do, YYYY", "MMMM Do, YY", "MMMM D YYYY", "MMMM D YY", "MMMM D, YYYY", "MMMM D, YY", "MMMM Do YYYY", "MMMM Do YY", "MMMM Do, YYYY", "MMMM Do, YY", "MMM D YYYY", "MMM D YY", "MMM D, YYYY", "MMM D, YY", "MMM Do YYYY", "MMM Do YY", "MMM Do, YYYY", "MMM Do, YY", "MMMM D", "MMMM Do", "MMM D", "MMM Do", "D MMMM", "Do MMMM", "D MMM", "Do MMM", "dddd", "ddd"],
  A = ["h:mm:ssa", "h:mm:ss a", "H:mm:ss", "h:mma", "h:mm a", "H:mm", "HHmm", "ha", "h a", "H", "LT", "LTS"],
  N = [b().ISO_8601, ...C.flatMap(e => [...A.map(t => "".concat(e, " ").concat(t)), ...A])];

function P() {
  let e = Chunk706454.default.locale;
  if ("en-US" === module) return Chunk572692;
  if ("en-GB" === module) return Chunk572692.GB;
  if ("de" === module) return Chunk710959;
  if ("fr" === module) return Chunk225300;
  if ("ja" === module) return Chunk627578;
  else if ("nl" === module) return Chunk281861;
  else if ("ru" === module) return Chunk49693;
  else if ("it" === module) return Chunk192157;
  else if ("uk" === module) return Chunk392481;
  else if ("zh-CN" === module) return Chunk497502;
  else if ("zh-TW" === module) return Chunk493398;
  else if (module.startsWith("sv-")) return Chunk67924;
  else if (module.startsWith("pt-")) return Chunk196958;
  else if (module.startsWith("es-")) return Chunk635852;
  else return null
}

function R(e, t, n) {
  let r, i, o;
  if (null == n) return {};
  let a = e.clone();
  a.subtract(1, n.periodType);
  let s = t.clone();
  return s.add(1, n.periodType), t.isSame(e, n.periodType) ? (o = T.intl.string(n.currentName), t.isSameOrBefore(e) && (i = T.intl.string(n.nextName))) : t.isSame(a, n.periodType) && (o = T.intl.string(n.previousName), i = T.intl.string(n.currentName)), null != i && (r = s.unix().toString()), {
    adjustedTimestamp: r,
    adjustedDescription: i,
    unadjustedDescription: o
  }
}
let w = {
  autocompleteInputElementType: "timestampMentionInput",
  matches: (e, t, n, r, i) => n.length > 1,
  queryResults(e, t, n) {
    var r;
    let i = b()(),
      o = P(),
      [a] = null != (r = null == o ? true : o.parse(n, i.toDate())) ? r : [true],
      s = (null == a ? true : a.start) != null && (null == a ? true : a.end) == null && a.text === n,
      l = s ? b()(a.start.date()) : b()(n, N, true),
      c = [],
      {
        format: u
      } = l.creationData();
    if ("string" != typeof u && (u = true), "" !== n || l.isValid() || (l = i, u = "YYYYMMDDHHmmss"), l.isValid() && (s || null != u)) {
      let e;
      if (s && !a.start.isCertain("hour")) {
        let e = 9e5,
          t = Math.round(l.valueOf() / e) * e;
        l = b()(t)
      }
      let t = s ? a.start.isCertain("weekday") : null == u ? true : u.includes("d"),
        n = s ? a.start.isCertain("day") || a.start.isCertain("month") || a.start.isCertain("year") : null == u ? true : u.includes("D"),
        r = s ? a.start.isCertain("year") : null == u ? true : u.includes("Y"),
        o = s ? a.start.isCertain("second") : null == u ? true : u.includes("s"),
        d = l.unix().toString(),
        f = o ? "S" : "s";
      n || t ? t && !n ? e = {
        periodType: "week",
        previousName: T.t["4uTwgO"],
        currentName: T.t["6YiNaP"],
        nextName: T.t.HE4jqH
      } : r || (e = {
        periodType: "year",
        previousName: T.t.R7VMEE,
        currentName: T.t["U8lK/J"],
        nextName: T.t.OppVVE
      }) : (c.push({
        mention: {
          timestamp: d,
          format: o ? "T" : "t"
        },
        description: T.intl.string(T.t.yHv4oJ)
      }), c.push({}), e = {
        periodType: "day",
        previousName: T.t.ZdDLO0,
        currentName: T.t.mbs4NX,
        nextName: T.t["EqnX/z"]
      });
      let {
        adjustedTimestamp: p,
        adjustedDescription: _,
        unadjustedDescription: m
      } = R(i, l, e);
      null != p && (c.push({
        mention: {
          timestamp: p,
          format: f
        },
        description: _
      }), c.push({
        mention: {
          timestamp: p,
          format: "f"
        }
      }), c.push({
        mention: {
          timestamp: p,
          format: "F"
        }
      }), c.push({
        mention: {
          timestamp: p,
          format: "R"
        }
      }), c.push({})), c.push({
        mention: {
          timestamp: d,
          format: f
        },
        description: m
      }), c.push({
        mention: {
          timestamp: d,
          format: "f"
        }
      }), c.push({
        mention: {
          timestamp: d,
          format: "F"
        }
      }), c.push({
        mention: {
          timestamp: d,
          format: "R"
        }
      })
    }
    return {
      results: {
        mentions: c
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        mentions: t
      },
      selectedIndex: n,
      query: o,
      onHover: a,
      onClick: s
    } = e, l = t.map((e, t) => {
      let {
        mention: i,
        description: o
      } = e;
      if (true === i) return (0, r.jsx)(y.ZP.Divider, {}, "divider-".concat(t));
      let l = (0, O.tC)(i);
      return null == l ? null : (0, r.jsx)(y.ZP.Timestamp, {
        onClick: s,
        onHover: a,
        selected: n === t,
        index: t,
        timestamp: l,
        description: o
      }, "timestamp-".concat(t))
    }), c = T.t.I4nJDb, u = T.intl.string(T.t.pUP8UM);
    return (0, r.jsxs)(i.Fragment, {
      children: [(0, S.gm)({
        titleWithQuery: c,
        titleWithoutQuery: u,
        query: o,
        getQuery: e => "".concat(e)
      }), l]
    }, "timestamp_formats")
  },
  onSelect(e) {
    var t, n;
    let {
      results: {
        mentions: r
      },
      index: i,
      options: o
    } = e, {
      mention: a
    } = null != (n = r[i]) ? n : {};
    if (null == a) return null;
    let s = (0, O.He)(a.timestamp, a.format),
      l = null == (t = (0, O.tC)(a)) ? true : t.formatted;
    return null == l ? null : (o.replaceInlineInput("timestampMentionInput", l, s), {
      type: I.z2.TIMESTAMP
    })
  }
}