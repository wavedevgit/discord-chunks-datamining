/** Chunk was on 132 **/
/** chunk id: 348559, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk341915 = require("./341915.js"),
  Chunk651892 = require("./651892.js"),
  Chunk792620 = require("./792620.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk784787 = require("./784787.js");

function g(t) {
  let {
    transitionState: e,
    onClose: s,
    questContent: g,
    quest: T
  } = t, _ = (t => {
    switch (t) {
      case l.uF.QUEST_BAR:
      case l.uF.QUEST_BAR_V2:
        return {
          location: true, age: true, activity: true
        };
      case l.uF.ACTIVITY_PANEL:
      case l.uF.QUESTS_EMBED:
      case l.uF.QUEST_LIVE_STREAM:
        return {
          activity: true
        };
      default:
        return
    }
  })(g), f = n.useMemo(() => {
    var t;
    return (0, o.JM)({
      isTargetedDisclosure: null != _,
      gamePublisher: T.config.messages.gamePublisher,
      gameTitle: T.config.messages.gameTitle,
      cosponsorName: null == (t = T.config.cosponsorMetadata) ? true : t.name,
      isVideoQuest: (0, u.vv)(T)
    })
  }, [T, _]);
  return (0, i.jsxs)(r.Modal, {
    size: "sm",
    transitionState: e,
    onClose: s,
    title: x.intl.string(x.t.GcsZKJ),
    actions: [{
      onClick: () => s(),
      text: x.intl.string(x.t.cpT0Cq)
    }],
    children: [(0, i.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      className: m.gt,
      children: f
    }), (0, i.jsx)(h, {
      targetedTraits: _
    }), (0, i.jsx)(a.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: x.intl.format(x.t.tzq9Wa, {
        privacySettingsUrl: c.A.getArticleURL(d.MVz.QUESTS_PRIVACY_CONTROLS)
      })
    })]
  })
}

function h(t) {
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
      className: m.OK,
      children: [t && (0, i.jsx)(T, {
        icon: a.L_e,
        children: x.intl.string(x.t.xQSdPv)
      }), s && (0, i.jsx)(T, {
        icon: a.nys,
        children: x.intl.string(x.t.mYt7hQ)
      }), n && (0, i.jsx)(T, {
        icon: a._xR,
        children: x.intl.string(x.t.XAsWxQ)
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
    className: m.hD,
    children: [(0, i.jsx)(e, {
      size: "xs",
      color: "currentColor"
    }), s]
  })
}