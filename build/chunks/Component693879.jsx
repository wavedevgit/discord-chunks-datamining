/** Chunk was on web.js **/
/** chunk id: 693879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m,
  z: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk773669 = require("./773669.js"),
  Chunk574520 = require("./574520.js"),
  Chunk583846 = require("./583846.js"),
  Chunk977788 = require("./977788.js"),
  Chunk809854 = require("./809854.js"),
  Chunk181691 = require("./181691.js");
let h = e => {
    let {
      entry: t,
      inline: n = false,
      textColor: a,
      textTabularNumbers: s = true,
      textFontCode: c = true,
      hovered: u = false,
      bold: h = false,
      scaleFontToUserSetting: m = false
    } = e, {
      now: g
    } = (0, p.e)(u), {
      enabled: E
    } = f.e.useConfig({
      location: "active_timestamp"
    }), y = i.useMemo(() => (0, d.W6)(t, g), [t, g]), b = i.useRef(y), O = i.useRef(y);
    return i.useEffect(() => {
      O.current = y
    }), i.useEffect(() => {
      b.current = O.current
    }, [t]), (0, r.jsx)(l.Text, {
      className: o()({
        [_.$N]: !!E || c,
        [_.Cr]: !E && h,
        [_.E1]: n
      }),
      variant: E ? "text-xs/normal" : "text-xs/medium",
      tabularNumbers: s,
      color: a,
      scaleFontToUserSetting: m,
      "aria-label": b.current,
      children: y
    })
  },
  m = e => {
    var t, n;
    let {
      entry: i,
      textColor: a,
      hovered: o = false,
      bold: f = false,
      scaleFontToUserSetting: p = false
    } = e, _ = (0, d.Hd)(i), m = (0, s.bG)([c.default], () => c.default.locale), g = (0, s.bG)([u.A], () => u.A.getMatchingActivity(i)), E = null != (t = null == g || null == (n = g.timestamps) ? true : n.start) ? t : null == g ? true : g.created_at;
    return null != E ? (0, r.jsx)(h, {
      entry: {
        start: E
      },
      textColor: a,
      hovered: o,
      bold: f,
      scaleFontToUserSetting: p
    }) : _ ? (0, r.jsx)(h, {
      entry: i,
      textColor: a,
      hovered: o,
      bold: f,
      scaleFontToUserSetting: p
    }) : (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: a,
      lineClamp: 1,
      scaleFontToUserSetting: p,
      children: (0, d.aJ)(i, m)
    })
  }