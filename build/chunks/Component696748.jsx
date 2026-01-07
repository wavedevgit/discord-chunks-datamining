/** Chunk was on web.js **/
/** chunk id: 696748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => I
}), require("./953529.js"), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk372123 = require("./372123.js"),
  Chunk224706 = require("./224706.js"),
  Chunk812206 = require("./812206.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk293245 = require("./293245.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk297867 = require("./297867.js"),
  Chunk478411 = require("./478411.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}
class v extends Chunk473749.PureComponent {
  renderConflictButton(e, t, n, i) {
    return (0, r.jsxs)(l.zx, {
      className: E.conflictButton,
      innerClassName: E.conflictButtonInner,
      onClick: i,
      children: [(0, r.jsx)("div", {
        className: n
      }), (0, r.jsxs)("div", {
        className: E.buttonBody,
        children: [(0, r.jsx)("div", {
          className: E.conflictTitle,
          children: e
        }), (0, r.jsx)("div", {
          children: g.intl.string(g.t.gflHO6)
        }), (0, r.jsx)("div", {
          className: E.timestamp,
          children: o()(t).calendar()
        })]
      })]
    })
  }
  renderError() {
    let {
      application: e
    } = this.props;
    return (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsxs)(c.hzk, {
        children: [(0, r.jsx)(p.Z, {
          justify: p.Z.Justify.CENTER,
          children: (0, r.jsx)("div", {
            className: E.errorArt
          })
        }), (0, r.jsx)("div", {
          className: E.description,
          children: g.intl.format(g.t.RAaWyc, {
            applicationName: e.name
          })
        })]
      }), (0, r.jsx)(c.mzw, {
        children: (0, r.jsxs)(p.Z, {
          justify: p.Z.Justify.BETWEEN,
          children: [(0, r.jsx)(l.zx, {
            className: E.linkButton,
            size: E.linkButtonSize,
            look: l.zx.Looks.LINK,
            color: l.zx.Colors.PRIMARY,
            onClick: this.onClose,
            children: g.intl.string(g.t["ETE/oC"])
          }), (0, r.jsxs)(p.Z, {
            direction: p.Z.Direction.HORIZONTAL,
            justify: p.Z.Justify.END,
            children: [(0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: E.retryButton,
              children: (0, r.jsx)(c.Button, {
                variant: "secondary",
                text: g.intl.string(g.t["5911Lb"]),
                onClick: () => this.handlePlay()
              })
            }), (0, r.jsx)(c.Button, {
              variant: "primary",
              text: g.intl.string(g.t["359Pbd"]),
              onClick: () => this.handlePlay(false)
            })]
          })]
        })
      })]
    })
  }
  renderConflict() {
    let {
      application: e,
      cloudSyncState: t
    } = this.props;
    if (t.type !== h.TzF.CONFLICT) throw Error("Cannot render conflict for non conflict type");
    return (0, r.jsxs)(c.hzk, {
      className: b.marginBottom20,
      children: [(0, r.jsx)("div", {
        className: E.description,
        children: g.intl.format(g.t.eyXUP6, {
          applicationName: e.name
        })
      }), this.renderConflictButton(g.intl.string(g.t.AQUmkr), t.remote.timestamp, E.conflictDownloadArt, this.handleChooseDownload), (0, r.jsxs)(p.Z, {
        className: E.choiceWrapper,
        align: p.Z.Align.CENTER,
        children: [(0, r.jsx)("div", {
          className: E.choiceLine
        }), (0, r.jsx)("div", {
          className: E.choiceTitle,
          children: g.intl.string(g.t.WUsA2D)
        }), (0, r.jsx)("div", {
          className: E.choiceLine
        })]
      }), this.renderConflictButton(g.intl.string(g.t.AXVwsw), t.next.timestamp, E.conflictUploadArt, this.handleChooseUpload)]
    })
  }
  render() {
    let {
      cloudSyncState: e,
      transitionState: t
    } = this.props, n = e.type === h.TzF.CONFLICT ? g.intl.string(g.t.oNbO1f) : g.intl.string(g.t.as4Tgg);
    return (0, r.jsxs)(c.Y0X, {
      transitionState: t,
      className: E.modal,
      "aria-label": n,
      parentComponent: "CloudSyncResolutionModal",
      children: [(0, r.jsxs)(c.xBx, {
        separator: false,
        children: [(0, r.jsx)(c.olH, {
          className: E.closeButton,
          onClick: this.onClose
        }), (0, r.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          className: b.marginReset,
          children: n
        })]
      }), e.type === h.TzF.CONFLICT ? this.renderConflict() : this.renderError()]
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, y(this, "onClose", () => {
      this.props.onClose()
    }), y(this, "handlePlay", function() {
      let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
        n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
        {
          libraryApplication: r,
          analyticsParams: i
        } = t.props;
      t.onClose(), I(r.id, r, {
        analyticsParams: i,
        cloudSync: e,
        cloudSyncForceHash: n
      })
    }), y(this, "handleChooseDownload", () => {
      let {
        cloudSyncState: e
      } = this.props;
      e.type === h.TzF.CONFLICT && this.handlePlay(true, e.remote.hash)
    }), y(this, "handleChooseUpload", () => {
      let {
        cloudSyncState: e
      } = this.props;
      e.type === h.TzF.CONFLICT && this.handlePlay(true, e.next.hash)
    })
  }
}
let S = Chunk442837.ZP.connectStores([Chunk293245.Z, Chunk812206.Z], e => {
  let {
    libraryApplication: t,
    branchId: n
  } = e;
  return {
    cloudSyncState: _.Z.getState(t.id, n),
    application: f.Z.getApplication(t.id)
  }
})(v);
async function I(e, t, n) {
  let i = f.Z.getApplication(e);
  if (null == i) return;
  let {
    cloudSync: a = true,
    cloudSyncForceHash: o = null,
    analyticsParams: s
  } = n;
  if (a && null != t) {
    let e = t.branchId;
    try {
      await u.Z(t.id, e, o)
    } catch (n) {
      (0, c.h7j)(n => (0, r.jsx)(S, O({
        libraryApplication: t,
        analyticsParams: s,
        branchId: e
      }, n)));
      return
    }
  }
  return m.default.track(h.rMx.APPLICATION_OPENED, O({
    application_id: i.id,
    application_name: i.name,
    type: h.q5t.LAUNCH,
    distributor: null != t ? t.getDistributor() : null
  }, s)), d.Z.launch({
    applicationId: i.id,
    branchId: null == t ? true : t.branchId
  })
}