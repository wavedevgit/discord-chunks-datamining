/** Chunk was on web.js **/
/** chunk id: 317941, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk533307 = require("./533307.js"),
  Chunk189907 = require("./189907.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk981632 = require("./981632.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk82142 = require("./82142.js"),
  Chunk246946 = require("./246946.js"),
  Chunk509545 = require("./509545.js"),
  Chunk55563 = require("./55563.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk669079 = require("./669079.js"),
  Chunk296848 = require("./296848.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk669255 = require("./669255.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let P = 512,
  w = 1e3;
class D extends Chunk647438.PureComponent {
  componentWillUnmount() {
    this._copyModeTimeout.stop()
  }
  get copyButtonText() {
    switch (this.state.copyMode) {
      case Chunk481060.uA3.SUCCESS:
        return Chunk388032.intl.string(Chunk388032.t.XVvPjU);
      case Chunk481060.uA3.ERROR:
        return Chunk388032.intl.string(Chunk388032.t.i4GM3L);
      default:
        return Chunk388032.intl.string(Chunk388032.t.OpuAlK)
    }
  }
  handleRevoke(e) {
    d.Z.revokeGiftCode(e)
  }
  render() {
    let {
      hideCode: e,
      giftCode: t
    } = this.props, {
      copyMode: n
    } = this.state;
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      direction: Chunk600164.Z.Direction.VERTICAL,
      className: Chunk669255.giftCodeRow,
      children: [(0, Chunk951288.jsx)(Chunk481060.kO8, {
        className: Chunk669255.codeText,
        value: (0, Chunk669079.Nz)(exports.code),
        text: this.copyButtonText,
        mode: require,
        supportsCopy: Chunk572004.wS,
        hideMessage: module ? Chunk388032.intl.string(Chunk388032.t["0RLn47"]) : null,
        onCopy: this.handleCopy,
        buttonColor: Chunk755721.Tt.BRAND,
        buttonLook: Chunk755721.iL.FILLED
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk669255.subTextRow,
        children: [null != exports.expiresAt ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
          children: [Chunk388032.intl.format(Chunk388032.t.ltVZcJ, {
            hours: exports.expiresAt.diff(o()(), "h")
          }), " —\xa0"]
        }) : null, (0, Chunk951288.jsx)(Chunk481060.P3F, {
          tag: "a",
          onClick: () => this.handleRevoke(exports.code),
          children: Chunk388032.intl.string(Chunk388032.t.v6Yazx)
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), R(this, "_copyModeTimeout", new l.V7), R(this, "state", {
      copyMode: u.uA3.DEFAULT
    }), R(this, "handleCopy", e => {
      let {
        giftCode: t,
        sku: n
      } = this.props;
      (0, S.dM)(t, n), (0, I.JG)(e, () => this.setState({
        copyMode: u.uA3.SUCCESS
      }), () => this.setState({
        copyMode: u.uA3.ERROR
      })), this._copyModeTimeout.start(w, () => {
        this.setState({
          copyMode: u.uA3.DEFAULT
        })
      })
    })
  }
}
class L extends Chunk647438.PureComponent {
  componentDidMount() {
    this._loadedAt = Date.now()
  }
  renderTitle() {
    let e, {
      sku: t,
      subscriptionPlan: n,
      giftCodeBatchId: i
    } = this.props;
    return e = Chunk647438 === Chunk474936.m8 ? Chunk388032.intl.string(Chunk388032.t.odsU6W) : Chunk647438 === Chunk474936.rX && null != require ? Chunk388032.intl.formatToPlainString(require.interval === Chunk474936.rV.MONTH ? Chunk388032.t.uZjpiJ : Chunk388032.t.bJW1EA, {
      skuName: exports.name,
      intervalCount: require.intervalCount
    }) : null == require ? exports.name : Chunk388032.intl.formatToPlainString(require.interval === Chunk474936.rV.MONTH ? Chunk388032.t.rCJvqo : Chunk388032.t.Vd3Iu8, {
      skuName: exports.name,
      intervalCount: require.intervalCount
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk669255.gameName,
      children: module
    })
  }
  renderGenerateGiftCodeRow() {
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      justify: Chunk600164.Z.Justify.BETWEEN,
      align: Chunk600164.Z.Align.CENTER,
      className: Chunk669255.generateCodeRow,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: Chunk388032.intl.string(Chunk388032.t.lELyPj)
      }), (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "primary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.Q3Qguo),
        loading: this.state.isCreating,
        onClick: this.handleGenerateGiftCode
      })]
    })
  }
  setIsHovered(e) {
    this.setState({
      isHovered: e
    })
  }
  render() {
    let {
      entitlements: e,
      application: t,
      giftCodes: n,
      className: a,
      sku: o,
      isFetching: s,
      hideCodes: l,
      giftStyle: c
    } = this.props, {
      isOpen: d
    } = this.state;
    return (0, Chunk951288.jsxs)(Chunk189907.Z, {
      className: Chunk913527,
      children: [(0, Chunk951288.jsx)(Chunk481060.P3F, {
        onClick: this.handleToggleOpen,
        className: Chunk669255.card,
        onMouseEnter: () => this.setIsHovered(true),
        onMouseLeave: () => this.setIsHovered(false),
        children: (0, Chunk951288.jsx)(Chunk189907.Z.Header, {
          splashArtURL: exports.getSplashURL(P),
          children: (0, Chunk951288.jsxs)("div", {
            className: Chunk669255.cardHeader,
            children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
              align: Chunk600164.Z.Align.CENTER,
              children: [null != Chunk755721 ? (0, Chunk951288.jsx)(Chunk981632.Z, {
                giftStyle: Chunk755721,
                className: Chunk669255.seasonalGiftBox,
                shouldAnimate: this.state.isHovered
              }) : (0, Chunk951288.jsx)(Chunk925329.Z, {
                game: exports,
                size: Chunk925329.A.MEDIUM,
                skuId: o.id
              }), (0, Chunk951288.jsxs)("div", {
                className: Chunk669255.headerText,
                children: [this.renderTitle(), (0, Chunk951288.jsx)("div", {
                  className: Chunk669255.subTextHeader,
                  children: Chunk388032.intl.format(Chunk388032.t.zMcvcA, {
                    copies: module.length
                  })
                })]
              })]
            }), (0, Chunk951288.jsx)(Chunk259580.Z, {
              direction: Chunk533307 ? Chunk259580.Z.Directions.UP : Chunk259580.Z.Directions.DOWN,
              className: Chunk669255.expandIcon
            })]
          })
        })
      }), Chunk533307 ? (0, Chunk951288.jsx)(Chunk189907.Z.Body, {
        children: Chunk442837 ? (0, Chunk951288.jsx)(Chunk481060.$jN, {
          className: Chunk669255.spinner
        }) : (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
          children: [require.length < module.length ? this.renderGenerateGiftCodeRow() : null, require.map(e => (0, r.jsx)(D, {
            giftCode: e,
            sku: o,
            hideCode: l
          }, e.code))]
        })
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), R(this, "_loadedAt", null), R(this, "state", {
      isOpen: false,
      isCreating: false,
      isHovered: false
    }), R(this, "handleGenerateGiftCode", async e => {
      e.stopPropagation();
      let {
        skuId: t,
        subscriptionPlanId: n,
        giftStyle: r
      } = this.props;
      this.setState({
        isCreating: true
      }), await d.Z.createGiftCode(t, n, r), this.setState({
        isCreating: false,
        isOpen: true
      })
    }), R(this, "handleToggleOpen", () => {
      let {
        skuId: e,
        subscriptionPlanId: t,
        loadedAt: n
      } = this.props, r = !this.state.isOpen;
      (null == n || null == this._loadedAt || n < this._loadedAt) && r && d.Z.fetchUserGiftCodesForSKU(e, t), this.setState({
        isOpen: !this.state.isOpen
      })
    })
  }
}
let x = Chunk442837.ZP.connectStores([Chunk55563.Z, Chunk246946.Z, Chunk82142.Z, Chunk812206.Z, Chunk509545.Z, Chunk314897.default], e => {
  let {
    skuId: t,
    subscriptionPlanId: n,
    giftStyle: r
  } = e, i = O.Z.get(t);
  if (null == i) throw Error("SKU was unavailable while rendering gift.");
  let a = E.Z.getForGifterSKUAndPlan(g.default.getId(), t, n).filter(e => !e.isClaimed).filter(e => e.giftStyle === r);
  return {
    sku: i,
    hideCodes: b.Z.enabled,
    isFetching: E.Z.getUserGiftCodesFetchingForSKUAndPlan(t, n),
    loadedAt: E.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
    application: _.Z.getApplication(i.applicationId),
    subscriptionPlan: null != n ? (0, T.oE)(n) : null,
    giftCodes: a
  }
})(L)