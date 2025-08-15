/** Chunk was on 6380 **/
/** chunk id: 696748, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  a: () => S
}), require("./953529.js"), require("./415506.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk422622 = require("./422622.js"),
  Chunk197571 = require("./197571.js");

function b(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}

function N(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), i.forEach(function(e) {
      b(t, e, n[e])
    })
  }
  return t
}
class T extends Chunk73800.PureComponent {
  renderConflictButton(t, e, n, r) {
    return (0, i.jsxs)(c.zx, {
      className: m.conflictButton,
      innerClassName: m.conflictButtonInner,
      onClick: r,
      children: [(0, i.jsx)("div", {
        className: n
      }), (0, i.jsxs)("div", {
        className: m.buttonBody,
        children: [(0, i.jsx)("div", {
          className: m.conflictTitle,
          children: t
        }), (0, i.jsx)("div", {
          children: O.intl.string(O.t.gflHOz)
        }), (0, i.jsx)("div", {
          className: m.timestamp,
          children: o()(e).calendar()
        })]
      })]
    })
  }
  renderError() {
    let {
      application: t
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
      children: [(0, Chunk255367.jsxs)(Chunk481060.hzk, {
        children: [(0, Chunk255367.jsx)(Chunk600164.Z, {
          justify: Chunk600164.Z.Justify.CENTER,
          children: (0, Chunk255367.jsx)("div", {
            className: Chunk422622.errorArt
          })
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk422622.description,
          children: Chunk388032.intl.format(Chunk388032.t.RAaWyc, {
            applicationName: module.name
          })
        })]
      }), (0, Chunk255367.jsx)(Chunk481060.mzw, {
        children: (0, Chunk255367.jsxs)(Chunk600164.Z, {
          justify: Chunk600164.Z.Justify.BETWEEN,
          children: [(0, Chunk255367.jsx)(Chunk755721.zx, {
            className: Chunk422622.linkButton,
            size: Chunk422622.linkButtonSize,
            look: Chunk755721.zx.Looks.LINK,
            color: Chunk755721.zx.Colors.PRIMARY,
            onClick: this.onClose,
            children: Chunk388032.intl.string(Chunk388032.t["ETE/oK"])
          }), (0, Chunk255367.jsxs)(Chunk600164.Z, {
            direction: Chunk600164.Z.Direction.HORIZONTAL,
            justify: Chunk600164.Z.Justify.END,
            children: [(0, Chunk255367.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: Chunk422622.retryButton,
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
      application: t,
      cloudSyncState: e
    } = this.props;
    if (exports.type !== Chunk981631.TzF.CONFLICT) throw Error("Cannot render conflict for non conflict type");
    return (0, Chunk255367.jsxs)(Chunk481060.hzk, {
      className: Chunk197571.marginBottom20,
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk422622.description,
        children: Chunk388032.intl.format(Chunk388032.t.eyXUPz, {
          applicationName: module.name
        })
      }), this.renderConflictButton(Chunk388032.intl.string(Chunk388032.t.AQUmkp), exports.remote.timestamp, Chunk422622.conflictDownloadArt, this.handleChooseDownload), (0, Chunk255367.jsxs)(Chunk600164.Z, {
        className: Chunk422622.choiceWrapper,
        align: Chunk600164.Z.Align.CENTER,
        children: [(0, Chunk255367.jsx)("div", {
          className: Chunk422622.choiceLine
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk422622.choiceTitle,
          children: Chunk388032.intl.string(Chunk388032.t.WUsA2N)
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk422622.choiceLine
        })]
      }), this.renderConflictButton(Chunk388032.intl.string(Chunk388032.t.AXVws7), exports.next.timestamp, Chunk422622.conflictUploadArt, this.handleChooseUpload)]
    })
  }
  render() {
    let {
      cloudSyncState: t,
      transitionState: e
    } = this.props, n = module.type === Chunk981631.TzF.CONFLICT ? Chunk388032.intl.string(Chunk388032.t.oNbO1d) : Chunk388032.intl.string(Chunk388032.t.as4Tgo);
    return (0, Chunk255367.jsxs)(Chunk481060.Y0X, {
      transitionState: exports,
      className: Chunk422622.modal,
      "aria-label": require,
      parentComponent: "CloudSyncResolutionModal",
      children: [(0, Chunk255367.jsxs)(Chunk481060.xBx, {
        separator: false,
        children: [(0, Chunk255367.jsx)(Chunk481060.olH, {
          className: Chunk422622.closeButton,
          onClick: this.onClose
        }), (0, Chunk255367.jsx)(Chunk481060.vwX, {
          tag: "h2",
          className: Chunk197571.marginReset,
          children: require
        })]
      }), module.type === Chunk981631.TzF.CONFLICT ? this.renderConflict() : this.renderError()]
    })
  }
  constructor(...t) {
    var e;
    super(...t), e = this, b(this, "onClose", () => {
      this.props.onClose()
    }), b(this, "handlePlay", function() {
      let t = !(arguments.length > 0) || true === arguments[0] || arguments[0],
        n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
        {
          libraryApplication: i,
          analyticsParams: r
        } = e.props;
      e.onClose(), S(i.id, i, {
        analyticsParams: r,
        cloudSync: t,
        cloudSyncForceHash: n
      })
    }), b(this, "handleChooseDownload", () => {
      let {
        cloudSyncState: t
      } = this.props;
      t.type === C.TzF.CONFLICT && this.handlePlay(true, t.remote.hash)
    }), b(this, "handleChooseUpload", () => {
      let {
        cloudSyncState: t
      } = this.props;
      t.type === C.TzF.CONFLICT && this.handlePlay(true, t.next.hash)
    })
  }
}
let A = Chunk442837.ZP.connectStores([Chunk293245.Z, Chunk812206.Z], t => {
  let {
    libraryApplication: e,
    branchId: n
  } = t;
  return {
    cloudSyncState: f.Z.getState(e.id, n),
    application: p.Z.getApplication(e.id)
  }
})(T);
async function S(t, e, n) {
  let r = p.Z.getApplication(t);
  if (null == r) return;
  let {
    cloudSync: l = true,
    cloudSyncForceHash: o = null,
    analyticsParams: a
  } = n;
  if (l && null != e) {
    let t = e.branchId;
    try {
      await d.Z(e.id, t, o)
    } catch (n) {
      (0, s.h7j)(n => (0, i.jsx)(A, N({
        libraryApplication: e,
        analyticsParams: a,
        branchId: t
      }, n)));
      return
    }
  }
  return y.default.track(C.rMx.APPLICATION_OPENED, N({
    application_id: r.id,
    application_name: r.name,
    type: C.q5t.LAUNCH,
    distributor: null != e ? e.getDistributor() : null
  }, a)), u.Z.launch({
    applicationId: r.id,
    branchId: null == e ? true : e.branchId
  })
}