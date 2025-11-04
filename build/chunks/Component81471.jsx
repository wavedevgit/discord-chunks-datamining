/** Chunk was on 1272 **/
/** chunk id: 81471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk95398 = require("./95398.jsx"),
  Chunk905405 = require("./905405.js"),
  Chunk255269 = require("./255269.js"),
  Chunk937889 = require("./937889.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk868807 = require("./868807.js"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk161414 = require("./161414.js"),
  Chunk430864 = require("./430864.js");
let v = Chunk647438.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: n,
    error: l,
    message: v
  } = (0, _.a)(t), C = (0, u.p)(), {
    isBlocked: S,
    isIgnored: T
  } = (0, s.cj)([g.Z], () => ({
    isBlocked: null != v && g.Z.isBlockedForMessage(v),
    isIgnored: null != v && g.Z.isIgnoredForMessage(v)
  }), [v]), N = (0, s.e7)([h.Z], () => h.Z.can(b.Plq.MANAGE_MESSAGES, t)), P = m.cC.useSetting(), {
    content: j
  } = i.useMemo(() => (null == v ? true : v.content) != null && "" !== v.content ? (0, p.ZP)(v, {
    formatInline: true,
    noStyleAndInteraction: true,
    shouldFilterKeywords: C
  }) : {
    content: null
  }, [v, C]), x = null;
  if (l) x = (0, r.jsx)(o.Text, {
    className: I.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: O.intl.string(O.t.BZHld2)
  });
  else if (n)
    if (null != v && S) x = (0, r.jsx)(o.Text, {
      className: I.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: O.intl.string(O.t["WPe+xL"])
    });
    else if (null != v && T) x = (0, r.jsx)(o.Text, {
    className: I.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: O.intl.string(O.t.uxrh1O)
  });
  else if (null != v) {
    let {
      contentPlaceholder: e,
      renderedContent: t
    } = (0, f.f)(v, j, S, T, a()(I.messageContent, y.inlineFormat), {
      leadingIconClass: I.messageContentIcon,
      trailingIconClass: I.messageContentIcon,
      iconSize: E.WW
    });
    x = null != t ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: I.messageContent,
      children: t
    }) : (0, r.jsx)(o.Text, {
      tag: "span",
      variant: "text-sm/normal",
      color: "text-muted",
      className: I.messageReplacement,
      children: e
    })
  } else x = (0, r.jsx)(o.Text, {
    className: I.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: O.intl.string(O.t["0KfDxM"])
  });
  else x = null;
  return (0, r.jsx)(c.aQ.Provider, {
    value: (0, d.Z)(P, N),
    children: (0, r.jsx)(o.Rny, {
      className: I.messageFocusBlock,
      children: x
    })
  })
})