/** Chunk was on web.js **/
/** chunk id: 561754, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
}), require("./114821.js"), require("./339614.js"), require("./896048.js"), require("./321073.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk59892 = require("./59892.js"),
  Chunk114088 = require("./114088.js"),
  Chunk743923 = require("./743923.js"),
  Chunk864642 = require("./864642.js"),
  Chunk274361 = require("./274361.js"),
  Chunk816694 = require("./816694.js"),
  Chunk418522 = require("./418522.js"),
  Chunk150239 = require("./150239.js"),
  Chunk464602 = require("./464602.js"),
  Chunk623819 = require("./623819.js"),
  Chunk342470 = require("./342470.js"),
  Chunk554067 = require("./554067.js"),
  Chunk471767 = require("./471767.js"),
  Chunk989349 = require("./989349.js"),
  y = require.n(Chunk989349),
  Chunk580424 = require("./580424.jsx"),
  Chunk379418 = require("./379418.js"),
  Chunk773669 = require("./773669.js"),
  Chunk634788 = require("./634788.jsx"),
  Chunk374803 = require("./374803.js"),
  Chunk985018 = require("./985018.jsx");
let T = ["YYYYMMDD", "YYYY-MM-DD", "LL", "L", "MMMM Do YYYY", "MMMM Do YY", "MMMM Do, YYYY", "MMMM Do, YY", "MMMM D YYYY", "MMMM D YY", "MMMM D, YYYY", "MMMM D, YY", "MMMM Do YYYY", "MMMM Do YY", "MMMM Do, YYYY", "MMMM Do, YY", "MMM D YYYY", "MMM D YY", "MMM D, YYYY", "MMM D, YY", "MMM Do YYYY", "MMM Do YY", "MMM Do, YYYY", "MMM Do, YY", "MMMM D", "MMMM Do", "MMM D", "MMM Do", "D MMMM", "Do MMMM", "D MMM", "Do MMM", "dddd", "ddd"],
  C = ["h:mm:ssa", "h:mm:ss a", "H:mm:ss", "h:mma", "h:mm a", "H:mm", "HHmm", "ha", "h a", "H", "LT", "LTS"],
  N = [y().ISO_8601, ...T.flatMap(e => [...C.map(t => "".concat(e, " ").concat(t)), ...C])];

function w() {
  let e = v.default.locale;
  if ("en-US" === e) return a;
  if ("en-GB" === e) return a.GB;
  if ("de" === e) return o;
  if ("fr" === e) return s;
  if ("ja" === e) return l;
  else if ("nl" === e) return c;
  else if ("ru" === e) return u;
  else if ("it" === e) return d;
  else if ("uk" === e) return f;
  else if ("zh-CN" === e) return p;
  else if ("zh-TW" === e) return _;
  else if (e.startsWith("sv-")) return h;
  else if (e.startsWith("pt-")) return m;
  else if (e.startsWith("es-")) return g;
  else return null
}

function R(e, t, n) {
  let r, i, a;
  if (null == n) return {};
  let o = e.clone();
  o.subtract(1, n.periodType);
  let s = t.clone();
  return s.add(1, n.periodType), t.isSame(e, n.periodType) ? (a = S.intl.string(n.currentName), t.isSameOrBefore(e) && (i = S.intl.string(n.nextName))) : t.isSame(o, n.periodType) && (a = S.intl.string(n.previousName), i = S.intl.string(n.currentName)), null != i && (r = s.unix().toString()), {
    adjustedTimestamp: r,
    adjustedDescription: i,
    unadjustedDescription: a
  }
}
let P = {
  autocompleteInputElementType: "timestampMentionInput",
  matches: (e, t, n, r, i) => n.length > 1,
  queryResults(e, t, n) {
    var r;
    let i = y()(),
      a = w(),
      [o] = null != (r = null == a ? true : a.parse(n, i.toDate())) ? r : [true],
      s = (null == o ? true : o.start) != null && (null == o ? true : o.end) == null && o.text === n,
      l = s ? y()(o.start.date()) : y()(n, N, true),
      c = [],
      {
        format: u
      } = l.creationData();
    if ("string" != typeof u && (u = true), "" !== n || l.isValid() || (l = i, u = "YYYYMMDDHHmmss"), l.isValid() && (s || null != u)) {
      let e;
      if (s && !o.start.isCertain("hour")) {
        let e = 9e5,
          t = Math.round(l.valueOf() / e) * e;
        l = y()(t)
      }
      let t = s ? o.start.isCertain("weekday") : null == u ? true : u.includes("d"),
        n = s ? o.start.isCertain("day") || o.start.isCertain("month") || o.start.isCertain("year") : null == u ? true : u.includes("D"),
        r = s ? o.start.isCertain("year") : null == u ? true : u.includes("Y"),
        a = s ? o.start.isCertain("second") : null == u ? true : u.includes("s"),
        d = l.unix().toString(),
        f = a ? "S" : "s";
      n || t ? t && !n ? e = {
        periodType: "week",
        previousName: S.t["4uTwgO"],
        currentName: S.t["6YiNaP"],
        nextName: S.t.HE4jqH
      } : r || (e = {
        periodType: "year",
        previousName: S.t.R7VMEE,
        currentName: S.t["U8lK/J"],
        nextName: S.t.OppVVE
      }) : (c.push({
        mention: {
          timestamp: d,
          format: a ? "T" : "t"
        },
        description: S.intl.string(S.t.yHv4oJ)
      }), c.push({}), e = {
        periodType: "day",
        previousName: S.t.ZdDLO0,
        currentName: S.t.mbs4NX,
        nextName: S.t["EqnX/z"]
      });
      let {
        adjustedTimestamp: p,
        adjustedDescription: _,
        unadjustedDescription: h
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
        description: h
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
      query: a,
      onHover: o,
      onClick: s
    } = e, l = t.map((e, t) => {
      let {
        mention: i,
        description: a
      } = e;
      if (true === i) return (0, r.jsx)(b.Ay.Divider, {}, "divider-".concat(t));
      let l = (0, O.WA)(i);
      return null == l ? null : (0, r.jsx)(b.Ay.Timestamp, {
        onClick: s,
        onHover: o,
        selected: n === t,
        index: t,
        timestamp: l,
        description: a
      }, "timestamp-".concat(t))
    }), c = S.t.I4nJDb, u = S.intl.string(S.t.pUP8UM);
    return (0, r.jsxs)(i.Fragment, {
      children: [(0, A.wZ)({
        titleWithQuery: c,
        titleWithoutQuery: u,
        query: a,
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
      options: a
    } = e, {
      mention: o
    } = null != (t = r[i]) ? t : {};
    if (null == o) return null;
    let s = (0, O.tf)(o.timestamp, o.format),
      l = null == (n = (0, O.WA)(o)) ? true : n.formatted;
    return null == l ? null : (a.replaceInlineInput("timestampMentionInput", l, s), {
      type: I.kc.TIMESTAMP
    })
  }
}