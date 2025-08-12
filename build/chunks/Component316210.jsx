/** Chunk was on 4266 **/
/** chunk id: 316210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk543200 = require("./543200.js"),
  Chunk708901 = require("./708901.js");
let f = e => {
  switch (e) {
    case c.jn.QUEST_BAR:
    case c.jn.QUEST_BAR_V2:
      return {
        location: true, age: true, activity: true
      };
    case c.jn.ACTIVITY_PANEL:
    case c.jn.QUESTS_EMBED:
    case c.jn.QUEST_LIVE_STREAM:
      return {
        activity: true
      };
    default:
      return
  }
};

function g(e) {
  let {
    transitionState: t,
    onClose: n,
    questContent: c,
    quest: g
  } = e, p = f(c), _ = s.useMemo(() => {
    var e;
    return (0, l.Fs)({
      isTargetedDisclosure: null != p,
      gamePublisher: g.config.messages.gamePublisher,
      gameTitle: g.config.messages.gameTitle,
      cosponsorName: null == (e = g.config.cosponsorMetadata) ? true : e.name
    })
  }, [g, p]);
  return (0, r.jsxs)(a.Y0X, {
    transitionState: t,
    size: a.CgR.DYNAMIC,
    className: u.modalRoot,
    parentComponent: "QuestsDisclosureModal",
    children: [(0, r.jsxs)(a.xBx, {
      direction: o.Z.Direction.VERTICAL,
      separator: false,
      className: u.modalHeader,
      children: [(0, r.jsxs)("div", {
        className: u.modalTop,
        children: [(0, r.jsx)("div", {
          className: u.iconFrame,
          children: (0, r.jsx)("img", {
            alt: "",
            src: x
          })
        }), (0, r.jsx)(a.olH, {
          className: u.closeBtn,
          onClick: n
        })]
      }), (0, r.jsx)(a.X6q, {
        variant: "heading-xl/bold",
        children: m.intl.string(m.t.GcsZKC)
      })]
    }), (0, r.jsxs)(a.hzk, {
      className: u.modalContent,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: u.upperBodyText,
        children: _
      }), (0, r.jsx)(j, {
        targetedTraits: p
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: m.intl.format(m.t.tzq9WV, {
          privacySettingsUrl: i.Z.getArticleURL(d.BhN.QUESTS_PRIVACY_CONTROLS)
        })
      })]
    }), (0, r.jsx)(a.mzw, {
      className: u.footer,
      children: (0, r.jsx)(a.zxk, {
        variant: "primary",
        text: m.intl.string(m.t.cpT0Cg),
        onClick: n
      })
    })]
  })
}

function p(e) {
  let {
    location: t,
    age: n,
    activity: s
  } = e;
  return (0, r.jsxs)("ul", {
    className: u.targetList,
    children: [t && (0, r.jsx)(_, {
      icon: a.enf,
      children: m.intl.string(m.t.xQSdPj)
    }), n && (0, r.jsx)(_, {
      icon: a.tBG,
      children: m.intl.string(m.t.mYt7hY)
    }), s && (0, r.jsx)(_, {
      icon: a.iWm,
      children: m.intl.string(m.t.XAsWxc)
    })]
  })
}

function j(e) {
  let {
    targetedTraits: t
  } = e;
  return null != t ? (0, r.jsx)(p, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, t)) : null
}

function _(e) {
  let {
    icon: t,
    children: n
  } = e;
  return (0, r.jsxs)(a.Text, {
    variant: "text-sm/medium",
    tag: "li",
    className: u.targetItem,
    children: [(0, r.jsx)(t, {
      size: "xs",
      color: "currentColor"
    }), n]
  })
}