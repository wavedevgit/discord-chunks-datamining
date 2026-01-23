/** Chunk was on 21738 **/
/** chunk id: 122943, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk863439 = require("./863439.js"),
  Chunk465364 = require("./465364.js"),
  Chunk448368 = require("./448368.jsx"),
  Chunk302031 = require("./302031.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk978914 = require("./978914.js"),
  Chunk652215 = require("./652215.js"),
  Chunk838541 = require("./838541.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk536791 = require("./536791.js"),
  Chunk206314 = require("./206314.js");
let y = Chunk64700.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: n,
    error: l,
    message: y
  } = (0, m.I)(t), {
    isBlocked: I,
    isIgnored: v
  } = (0, s.cf)([f.A], () => ({
    isBlocked: null != y && f.A.isBlockedForMessage(y),
    isIgnored: null != y && f.A.isIgnoredForMessage(y)
  }), [y]), S = (0, s.bG)([g.A], () => g.A.can(A.xBc.MANAGE_MESSAGES, t)), C = h.gs.useSetting(), {
    content: N
  } = i.useMemo(() => (null == y ? true : y.content) != null && "" !== y.content ? (0, u.Ay)(y, {
    formatInline: true,
    noStyleAndInteraction: true
  }) : {
    content: null
  }, [y]), T = null;
  if (l) T = (0, r.jsx)(o.Text, {
    className: E.G4,
    variant: "text-sm/normal",
    color: "text-muted",
    children: b.intl.string(b.t.BZHld2)
  });
  else if (n)
    if (null != y && I) T = (0, r.jsx)(o.Text, {
      className: E.G4,
      variant: "text-sm/normal",
      color: "text-muted",
      children: b.intl.string(b.t["WPe+xL"])
    });
    else if (null != y && v) T = (0, r.jsx)(o.Text, {
    className: E.G4,
    variant: "text-sm/normal",
    color: "text-muted",
    children: b.intl.string(b.t.uxrh1O)
  });
  else if (null != y) {
    let {
      contentPlaceholder: e,
      renderedContent: t
    } = (0, d.o)(y, N, I, v, a()(E.BK, O.tZ), {
      leadingIconClass: E.AF,
      trailingIconClass: E.AF,
      iconSize: _.eJ
    });
    T = null != t ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: E.BK,
      children: t
    }) : (0, r.jsx)(o.Text, {
      tag: "span",
      variant: "text-sm/normal",
      color: "text-muted",
      className: E.G4,
      children: e
    })
  } else T = (0, r.jsx)(o.Text, {
    className: E.G4,
    variant: "text-sm/normal",
    color: "text-muted",
    children: b.intl.string(b.t["0KfDxM"])
  });
  else T = null;
  return (0, r.jsx)(p.Bs.Provider, {
    value: (0, c.A)(C, S),
    children: (0, r.jsx)(o.M1G, {
      className: E.JY,
      children: T
    })
  })
})