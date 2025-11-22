/** Chunk was on 27333 **/
/** chunk id: 404088, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk923132 = require("./923132.js");

function g(t) {
  let {
    transitionState: e,
    onClose: s,
    questContent: g,
    quest: T
  } = t, h = (t => {
    switch (t) {
      case l.jn.QUEST_BAR:
      case l.jn.QUEST_BAR_V2:
        return {
          location: true, age: true, activity: true
        };
      case l.jn.ACTIVITY_PANEL:
      case l.jn.QUESTS_EMBED:
      case l.jn.QUEST_LIVE_STREAM:
        return {
          activity: true
        };
      default:
        return
    }
  })(g), p = n.useMemo(() => {
    var t;
    return (0, o.Fs)({
      isTargetedDisclosure: null != h,
      gamePublisher: T.config.messages.gamePublisher,
      gameTitle: T.config.messages.gameTitle,
      cosponsorName: null == (t = T.config.cosponsorMetadata) ? true : t.name
    })
  }, [T, h]);
  return (0, i.jsxs)(r.Modal, {
    size: "sm",
    transitionState: e,
    onClose: s,
    title: d.intl.string(d.t.GcsZKJ),
    actions: [{
      onClick: () => s(),
      text: d.intl.string(d.t.cpT0Cq)
    }],
    children: [(0, i.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: m.upperBodyText,
      children: p
    }), (0, i.jsx)(x, {
      targetedTraits: h
    }), (0, i.jsx)(a.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: d.intl.format(d.t.tzq9Wa, {
        privacySettingsUrl: c.Z.getArticleURL(u.BhN.QUESTS_PRIVACY_CONTROLS)
      })
    })]
  })
}

function x(t) {
  let {
    targetedTraits: e
  } = t;
  if (null == e) return null;
  {
    let {
      location: t,
      age: s,
      activity: n
    } = e;
    return (0, i.jsxs)("ul", {
      className: m.targetList,
      children: [t && (0, i.jsx)(T, {
        icon: a.enf,
        children: d.intl.string(d.t.xQSdPv)
      }), s && (0, i.jsx)(T, {
        icon: a.tBG,
        children: d.intl.string(d.t.mYt7hQ)
      }), n && (0, i.jsx)(T, {
        icon: a.iWm,
        children: d.intl.string(d.t.XAsWxQ)
      })]
    })
  }
}

function T(t) {
  let {
    icon: e,
    children: s
  } = t;
  return (0, i.jsxs)(a.Text, {
    variant: "text-sm/medium",
    tag: "li",
    className: m.targetItem,
    children: [(0, i.jsx)(e, {
      size: "xs",
      color: "currentColor"
    }), s]
  })
}