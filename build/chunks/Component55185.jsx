/** Chunk was on 91488 **/
/** chunk id: 55185, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => T,
  N: () => Z
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk381499 = require("./381499.js"),
  Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js"),
  Chunk675478 = require("./675478.js"),
  Chunk885110 = require("./885110.js"),
  Chunk63063 = require("./63063.js"),
  Chunk316496 = require("./316496.js"),
  Chunk223730 = require("./223730.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk933554 = require("./933554.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk87587 = require("./87587.js"),
  Chunk354810 = require("./354810.js");
async function v(e) {
  await d.hW.updateAsync("status", t => {
    t.status = s.Gm.create({
      value: e
    }), t.statusExpiresAtMs = "0"
  }, d.fy.INFREQUENT_USER_ACTION)
}

function j(e) {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)("div", {
    "data-button-hoisted-classname-wrapper": true,
    className: _.goOnlineButton,
    children: (0, i.jsx)(c.zxk, {
      variant: "primary",
      size: "sm",
      text: O.intl.string(b.default.Poezn5),
      onClick: () => {
        t(), v(c.Skl.ONLINE)
      },
      fullWidth: true
    })
  })
}

function C(e) {
  let {
    showCurrentGame: t,
    shouldShowStatus: n = false,
    shouldShowCustomizeLink: r = false,
    closePopout: l
  } = e, o = (0, a.e7)([p.Z], () => p.Z.getStatus()), {
    showLinkToSettings: s
  } = (0, h.D)("popout");
  return (0, i.jsxs)("div", {
    className: _.toggleContainer,
    children: [(0, i.jsxs)("div", {
      className: _.toggleContainerText,
      children: [(0, i.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "header-primary",
        children: O.intl.string(O.t.KY0ilp)
      }), n && (0, i.jsxs)("div", {
        className: _.toggleContainerOnlineRow,
        children: [(0, i.jsx)(c.qbd, {
          status: c.Skl.ONLINE,
          size: 8
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: o === c.Skl.INVISIBLE ? O.intl.string(b.default.a3AofX) : O.intl.string(O.t.WbGtnJ)
        })]
      }), r && s && (0, i.jsx)(g.K, {
        onClosePopout: l
      })]
    }), (0, i.jsx)(c.rsf, {
      onChange: e => {
        u.G6.updateSetting(e), n && v(e ? c.Skl.ONLINE : c.Skl.INVISIBLE)
      },
      checked: t
    })]
  })
}

function x(e) {
  let {
    children: t,
    closePopout: n
  } = e, r = (0, l.useRef)(null);
  (0, c.Tbt)(r);
  let s = u.G6.useSetting(),
    d = (0, a.e7)([p.Z], () => p.Z.getStatus()) === c.Skl.INVISIBLE && s;
  return (0, i.jsxs)("div", {
    className: _.wrapper,
    ref: r,
    children: [null != n && (0, i.jsx)("div", {
      className: _.gradient
    }), (0, i.jsxs)("div", {
      className: _.content,
      children: [null != n && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("img", {
          alt: "",
          src: y.Z,
          className: _.controllerImage
        }), (0, i.jsx)(o.X6, {
          variant: "heading-md/bold",
          color: "header-primary",
          className: _.nuxTitle,
          children: O.intl.string(d ? b.default.MkgMBw : O.t.PRjSRk)
        })]
      }), t]
    }), null != n && (0, i.jsx)("div", {
      className: _.closeButton,
      children: (0, i.jsx)(c.hU, {
        icon: c.Dio,
        onClick: n,
        "aria-label": O.intl.string(O.t.cpT0Cg),
        variant: "icon-only",
        size: "sm"
      })
    })]
  })
}

function E(e) {
  let {
    closePopout: t
  } = e, n = u.G6.useSetting();
  return (0, i.jsxs)(x, {
    closePopout: t,
    children: [(0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      className: _.nuxContent,
      children: O.intl.format(b.default.nHDuwM, {
        learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    }), (0, i.jsx)("div", {
      className: _.toggleContainerWrapper,
      children: (0, i.jsx)(C, {
        showCurrentGame: n,
        shouldShowCustomizeLink: true,
        closePopout: t
      })
    })]
  })
}

function S(e) {
  let {
    closePopout: t
  } = e;
  return (0, i.jsxs)(x, {
    closePopout: t,
    children: [(0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      className: _.nuxContent,
      children: O.intl.format(b.default["vtp/IS"], {
        learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    }), (0, i.jsx)(j, {
      closePopout: t
    })]
  })
}

function I(e) {
  let {
    closePopout: t
  } = e, n = u.G6.useSetting();
  return (0, i.jsxs)(x, {
    closePopout: t,
    children: [(0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      className: _.nuxContent,
      children: O.intl.format(b.default.nHDuwM, {
        learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    }), (0, i.jsx)("div", {
      className: _.toggleContainerWrapper,
      children: (0, i.jsx)(C, {
        showCurrentGame: n,
        shouldShowStatus: true,
        closePopout: t
      })
    })]
  })
}

function P(e) {
  let {
    closePopout: t
  } = e, n = u.G6.useSetting(), {
    showLinkToSettings: r
  } = (0, h.D)("popout");
  return (0, i.jsxs)(x, {
    children: [(0, i.jsx)(C, {
      showCurrentGame: n,
      closePopout: t
    }), (0, i.jsx)(c.$i$, {
      className: _.divider
    }), (0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: O.intl.format(b.default.nHDuwM, {
        learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    }), r && (0, i.jsx)(g.y, {
      onClosePopout: t
    })]
  })
}

function N(e) {
  let {
    closePopout: t
  } = e;
  return (0, i.jsxs)(x, {
    children: [(0, i.jsx)(o.X6, {
      variant: "heading-sm/semibold",
      color: "header-primary",
      className: _.controlTitle,
      children: O.intl.string(b.default.MkgMBw)
    }), (0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: O.intl.format(b.default["vtp/IS"], {
        learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    }), (0, i.jsx)(j, {
      closePopout: t
    })]
  })
}

function w(e) {
  let {
    closePopout: t
  } = e, n = u.G6.useSetting(), {
    showLinkToSettings: r
  } = (0, h.D)("popout");
  return (0, i.jsxs)(x, {
    children: [(0, i.jsx)(C, {
      showCurrentGame: n,
      shouldShowStatus: true,
      closePopout: t
    }), (0, i.jsx)(c.$i$, {
      className: _.divider
    }), (0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: O.intl.format(b.default.nHDuwM, {
        learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    }), r && (0, i.jsx)(g.y, {
      onClosePopout: t
    })]
  })
}
var Z = ((r = {})[r.ActivityNux = 0] = "ActivityNux", r[r.StatusNux = 1] = "StatusNux", r[r.ActivityAndStatusNux = 2] = "ActivityAndStatusNux", r[r.Activity = 3] = "Activity", r[r.Status = 4] = "Status", r[r.ActivityAndStatus = 5] = "ActivityAndStatus", r);

function T(e) {
  let {
    popoutState: t,
    closePopout: n,
    onOpen: r
  } = e, [o] = (0, l.useState)(t);
  switch ((0, l.useEffect)(() => {
      r()
    }, [r]), o) {
    case 0:
      return (0, i.jsx)(E, {
        closePopout: n
      });
    case 1:
      return (0, i.jsx)(S, {
        closePopout: n
      });
    case 2:
      return (0, i.jsx)(I, {
        closePopout: n
      });
    case 3:
      return (0, i.jsx)(P, {
        closePopout: n
      });
    case 4:
      return (0, i.jsx)(N, {
        closePopout: n
      });
    case 5:
      return (0, i.jsx)(w, {
        closePopout: n
      });
    default:
      return null
  }
}