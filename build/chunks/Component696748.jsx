/** Chunk was on web.js **/
/** chunk id: 696748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => T
}), require("./953529.js"), require("./415506.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
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
  Chunk611319 = require("./611319.js"),
  Chunk881488 = require("./881488.js");

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
class v extends Chunk73800.PureComponent {
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
          children: g.intl.string(g.t.gflHOz)
        }), (0, r.jsx)("div", {
          className: E.timestamp,
          children: a()(t).calendar()
        })]
      })]
    })
  }
  renderError() {
    let {
      application: e
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
      children: [(0, Chunk255367.jsxs)(Chunk481060.hzk, {
        children: [(0, Chunk255367.jsx)(Chunk600164.Z, {
          justify: Chunk600164.Z.Justify.CENTER,
          children: (0, Chunk255367.jsx)("div", {
            className: Chunk611319.errorArt
          })
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk611319.description,
          children: Chunk388032.intl.format(Chunk388032.t.RAaWyc, {
            applicationName: module.name
          })
        })]
      }), (0, Chunk255367.jsx)(Chunk481060.mzw, {
        children: (0, Chunk255367.jsxs)(Chunk600164.Z, {
          justify: Chunk600164.Z.Justify.BETWEEN,
          children: [(0, Chunk255367.jsx)(Chunk755721.zx, {
            className: Chunk611319.linkButton,
            size: Chunk611319.linkButtonSize,
            look: Chunk755721.zx.Looks.LINK,
            color: Chunk755721.zx.Colors.PRIMARY,
            onClick: this.onClose,
            children: Chunk388032.intl.string(Chunk388032.t["ETE/oK"])
          }), (0, Chunk255367.jsxs)(Chunk600164.Z, {
            direction: Chunk600164.Z.Direction.HORIZONTAL,
            justify: Chunk600164.Z.Justify.END,
            children: [(0, Chunk255367.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: Chunk611319.retryButton,
              children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
                variant: "secondary",
                text: Chunk388032.intl.string(Chunk388032.t["5911LS"]),
                onClick: () => this.handlePlay()
              })
            }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: Chunk388032.intl.string(Chunk388032.t["359PbW"]),
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
    if (exports.type !== Chunk981631.TzF.CONFLICT) throw Error("Cannot render conflict for non conflict type");
    return (0, Chunk255367.jsxs)(Chunk481060.hzk, {
      className: Chunk881488.marginBottom20,
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk611319.description,
        children: Chunk388032.intl.format(Chunk388032.t.eyXUPz, {
          applicationName: module.name
        })
      }), this.renderConflictButton(Chunk388032.intl.string(Chunk388032.t.AQUmkp), exports.remote.timestamp, Chunk611319.conflictDownloadArt, this.handleChooseDownload), (0, Chunk255367.jsxs)(Chunk600164.Z, {
        className: Chunk611319.choiceWrapper,
        align: Chunk600164.Z.Align.CENTER,
        children: [(0, Chunk255367.jsx)("div", {
          className: Chunk611319.choiceLine
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk611319.choiceTitle,
          children: Chunk388032.intl.string(Chunk388032.t.WUsA2N)
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk611319.choiceLine
        })]
      }), this.renderConflictButton(Chunk388032.intl.string(Chunk388032.t.AXVws7), exports.next.timestamp, Chunk611319.conflictUploadArt, this.handleChooseUpload)]
    })
  }
  render() {
    let {
      cloudSyncState: e,
      transitionState: t
    } = this.props, n = module.type === Chunk981631.TzF.CONFLICT ? Chunk388032.intl.string(Chunk388032.t.oNbO1d) : Chunk388032.intl.string(Chunk388032.t.as4Tgo);
    return (0, Chunk255367.jsxs)(Chunk481060.Y0X, {
      transitionState: exports,
      className: Chunk611319.modal,
      "aria-label": require,
      parentComponent: "CloudSyncResolutionModal",
      children: [(0, Chunk255367.jsxs)(Chunk481060.xBx, {
        separator: false,
        children: [(0, Chunk255367.jsx)(Chunk481060.olH, {
          className: Chunk611319.closeButton,
          onClick: this.onClose
        }), (0, Chunk255367.jsx)(Chunk481060.vwX, {
          tag: "h2",
          className: Chunk881488.marginReset,
          children: require
        })]
      }), module.type === Chunk981631.TzF.CONFLICT ? this.renderConflict() : this.renderError()]
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
      t.onClose(), T(r.id, r, {
        analyticsParams: i,
        cloudSync: e,
        cloudSyncForceHash: n
      })
    }), y(this, "handleChooseDownload", () => {
      let {
        cloudSyncState: e
      } = this.props;
      e.type === m.TzF.CONFLICT && this.handlePlay(true, e.remote.hash)
    }), y(this, "handleChooseUpload", () => {
      let {
        cloudSyncState: e
      } = this.props;
      e.type === m.TzF.CONFLICT && this.handlePlay(true, e.next.hash)
    })
  }
}
let I = Chunk442837.ZP.connectStores([Chunk293245.Z, Chunk812206.Z], e => {
  let {
    libraryApplication: t,
    branchId: n
  } = e;
  return {
    cloudSyncState: p.Z.getState(t.id, n),
    application: f.Z.getApplication(t.id)
  }
})(v);
async function T(e, t, n) {
  let i = f.Z.getApplication(e);
  if (null == i) return;
  let {
    cloudSync: o = true,
    cloudSyncForceHash: a = null,
    analyticsParams: s
  } = n;
  if (o && null != t) {
    let e = t.branchId;
    try {
      await u.Z(t.id, e, a)
    } catch (n) {
      (0, c.h7j)(n => (0, r.jsx)(I, O({
        libraryApplication: t,
        analyticsParams: s,
        branchId: e
      }, n)));
      return
    }
  }
  return h.default.track(m.rMx.APPLICATION_OPENED, O({
    application_id: i.id,
    application_name: i.name,
    type: m.q5t.LAUNCH,
    distributor: null != t ? t.getDistributor() : null
  }, s)), d.Z.launch({
    applicationId: i.id,
    branchId: null == t ? true : t.branchId
  })
}