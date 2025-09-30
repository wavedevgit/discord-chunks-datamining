/** Chunk was on 51727 **/
/** chunk id: 55185, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => Z,
  N: () => w
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk246133 = require("./246133.js"),
  Chunk695346 = require("./695346.js"),
  Chunk885110 = require("./885110.js"),
  Chunk63063 = require("./63063.js"),
  Chunk316496 = require("./316496.js"),
  Chunk223730 = require("./223730.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk933554 = require("./933554.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk87587 = require("./87587.js"),
  Chunk354810 = require("./354810.js");

function v(e) {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)("div", {
    "data-button-hoisted-classname-wrapper": true,
    className: O.goOnlineButton,
    children: (0, i.jsx)(c.zxk, {
      variant: "primary",
      size: "sm",
      text: _.intl.string(b.default.Poezn5),
      onClick: () => {
        t(), (0, u.Z)({
          nextStatus: c.Skl.ONLINE
        })
      },
      fullWidth: true
    })
  })
}

function j(e) {
  let {
    showCurrentGame: t,
    shouldShowStatus: n = false,
    shouldShowCustomizeLink: r = false,
    closePopout: l
  } = e, o = (0, a.e7)([p.Z], () => p.Z.getStatus()), {
    showLinkToSettings: f
  } = (0, h.D)("popout");
  return (0, i.jsxs)("div", {
    className: O.toggleContainer,
    children: [(0, i.jsxs)("div", {
      className: O.toggleContainerText,
      children: [(0, i.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "header-primary",
        children: _.intl.string(_.t.KY0ilp)
      }), n && (0, i.jsxs)("div", {
        className: O.toggleContainerOnlineRow,
        children: [(0, i.jsx)(c.qbd, {
          status: c.Skl.ONLINE,
          size: 8
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: o === c.Skl.INVISIBLE ? _.intl.string(b.default.a3AofX) : _.intl.string(_.t.WbGtnJ)
        })]
      }), r && f && (0, i.jsx)(g.K, {
        onClosePopout: l
      })]
    }), (0, i.jsx)(s.T2, {
      onChange: e => {
        d.G6.updateSetting(e), n && (0, u.Z)({
          nextStatus: e ? c.Skl.ONLINE : c.Skl.INVISIBLE
        })
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
  let s = d.G6.useSetting(),
    u = (0, a.e7)([p.Z], () => p.Z.getStatus()) === c.Skl.INVISIBLE && s;
  return (0, i.jsxs)("div", {
    className: O.wrapper,
    ref: r,
    children: [null != n && (0, i.jsx)("div", {
      className: O.gradient
    }), (0, i.jsxs)("div", {
      className: O.content,
      children: [null != n && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("img", {
          alt: "",
          src: y.Z,
          className: O.controllerImage
        }), (0, i.jsx)(o.X6q, {
          variant: "heading-md/bold",
          color: "header-primary",
          className: O.nuxTitle,
          children: _.intl.string(u ? b.default.MkgMBw : _.t.PRjSRk)
        })]
      }), t]
    }), null != n && (0, i.jsx)("div", {
      className: O.closeButton,
      children: (0, i.jsx)(c.hU, {
        icon: c.Dio,
        onClick: n,
        "aria-label": _.intl.string(_.t.cpT0Cg),
        variant: "icon-only",
        size: "sm"
      })
    })]
  })
}

function C(e) {
  let {
    closePopout: t
  } = e, n = d.G6.useSetting();
  return (0, i.jsxs)(x, {
    closePopout: t,
    children: [(0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      className: O.nuxContent,
      children: _.intl.format(b.default.nHDuwM, {
        learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    }), (0, i.jsx)("div", {
      className: O.toggleContainerWrapper,
      children: (0, i.jsx)(j, {
        showCurrentGame: n,
        shouldShowCustomizeLink: true,
        closePopout: t
      })
    })]
  })
}

function E(e) {
  let {
    closePopout: t
  } = e;
  return (0, i.jsxs)(x, {
    closePopout: t,
    children: [(0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      className: O.nuxContent,
      children: _.intl.format(b.default["vtp/IS"], {
        learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    }), (0, i.jsx)(v, {
      closePopout: t
    })]
  })
}

function S(e) {
  let {
    closePopout: t
  } = e, n = d.G6.useSetting();
  return (0, i.jsxs)(x, {
    closePopout: t,
    children: [(0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      className: O.nuxContent,
      children: _.intl.format(b.default.nHDuwM, {
        learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    }), (0, i.jsx)("div", {
      className: O.toggleContainerWrapper,
      children: (0, i.jsx)(j, {
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
  } = e, n = d.G6.useSetting(), {
    showLinkToSettings: r
  } = (0, h.D)("popout");
  return (0, i.jsxs)(x, {
    children: [(0, i.jsx)(j, {
      showCurrentGame: n,
      closePopout: t
    }), (0, i.jsx)(c.izJ, {
      className: O.divider
    }), (0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: _.intl.format(b.default.nHDuwM, {
        learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    }), r && (0, i.jsx)(g.y, {
      onClosePopout: t
    })]
  })
}

function I(e) {
  let {
    closePopout: t
  } = e;
  return (0, i.jsxs)(x, {
    children: [(0, i.jsx)(o.X6q, {
      variant: "heading-sm/semibold",
      color: "header-primary",
      className: O.controlTitle,
      children: _.intl.string(b.default.MkgMBw)
    }), (0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: _.intl.format(b.default["vtp/IS"], {
        learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    }), (0, i.jsx)(v, {
      closePopout: t
    })]
  })
}

function N(e) {
  let {
    closePopout: t
  } = e, n = d.G6.useSetting(), {
    showLinkToSettings: r
  } = (0, h.D)("popout");
  return (0, i.jsxs)(x, {
    children: [(0, i.jsx)(j, {
      showCurrentGame: n,
      shouldShowStatus: true,
      closePopout: t
    }), (0, i.jsx)(c.izJ, {
      className: O.divider
    }), (0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: _.intl.format(b.default.nHDuwM, {
        learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    }), r && (0, i.jsx)(g.y, {
      onClosePopout: t
    })]
  })
}
var w = ((r = {})[r.ActivityNux = 0] = "ActivityNux", r[r.StatusNux = 1] = "StatusNux", r[r.ActivityAndStatusNux = 2] = "ActivityAndStatusNux", r[r.Activity = 3] = "Activity", r[r.Status = 4] = "Status", r[r.ActivityAndStatus = 5] = "ActivityAndStatus", r);

function Z(e) {
  let {
    popoutState: t,
    closePopout: n,
    onOpen: r
  } = e, [o] = (0, l.useState)(t);
  switch ((0, l.useEffect)(() => {
      r()
    }, [r]), o) {
    case 0:
      return (0, i.jsx)(C, {
        closePopout: n
      });
    case 1:
      return (0, i.jsx)(E, {
        closePopout: n
      });
    case 2:
      return (0, i.jsx)(S, {
        closePopout: n
      });
    case 3:
      return (0, i.jsx)(P, {
        closePopout: n
      });
    case 4:
      return (0, i.jsx)(I, {
        closePopout: n
      });
    case 5:
      return (0, i.jsx)(N, {
        closePopout: n
      });
    default:
      return null
  }
}