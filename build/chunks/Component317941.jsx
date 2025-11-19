/** Chunk was on web.js **/
/** chunk id: 317941, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
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
  Chunk164670 = require("./164670.js"),
  Chunk848118 = require("./848118.jsx"),
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
  Chunk786636 = require("./786636.js");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let x = 512,
  M = 1e3;
class j extends Chunk473749.PureComponent {
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
    _.Z.revokeGiftCode(e)
  }
  render() {
    let {
      hideCode: e,
      giftCode: t
    } = this.props, {
      copyMode: n
    } = this.state;
    return (0, Chunk54381.jsxs)(Chunk600164.Z, {
      direction: Chunk600164.Z.Direction.VERTICAL,
      className: Chunk786636.giftCodeRow,
      children: [(0, Chunk54381.jsx)(Chunk481060.kO8, {
        className: Chunk786636.codeText,
        value: (0, Chunk669079.Nz)(exports.code),
        text: this.copyButtonText,
        mode: require,
        supportsCopy: Chunk572004.wS,
        hideMessage: module ? Chunk388032.intl.string(Chunk388032.t["0RLn47"]) : null,
        onCopy: this.handleCopy,
        buttonColor: Chunk755721.Tt.BRAND,
        buttonLook: Chunk755721.iL.FILLED
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk786636.subTextRow,
        children: [null != exports.expiresAt ? (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
          children: [Chunk388032.intl.format(Chunk388032.t.ltVZcJ, {
            hours: exports.expiresAt.diff(l()(), "h")
          }), " —\xa0"]
        }) : null, (0, Chunk54381.jsx)(Chunk481060.P3F, {
          tag: "a",
          onClick: () => this.handleRevoke(exports.code),
          children: Chunk388032.intl.string(Chunk388032.t.v6Yazx)
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), L(this, "_copyModeTimeout", new u.V7), L(this, "state", {
      copyMode: f.uA3.DEFAULT
    }), L(this, "handleCopy", e => {
      let {
        giftCode: t,
        sku: n
      } = this.props;
      (0, N.dM)(t, n), (0, C.JG)(e, () => this.setState({
        copyMode: f.uA3.SUCCESS
      }), () => this.setState({
        copyMode: f.uA3.ERROR
      })), this._copyModeTimeout.start(M, () => {
        this.setState({
          copyMode: f.uA3.DEFAULT
        })
      })
    })
  }
}
class k extends Chunk473749.PureComponent {
  componentDidMount() {
    this._loadedAt = Date.now()
  }
  renderGiftIcon() {
    let {
      sku: e,
      giftStyle: t,
      application: n
    } = this.props;
    return (0, Chunk164670.K$)(module) ? (0, Chunk54381.jsx)(Chunk848118.A, {
      shape: "square",
      sku: module,
      containerClassName: Chunk786636.giftIcon
    }) : null != exports ? (0, Chunk54381.jsx)(Chunk981632.Z, {
      giftStyle: exports,
      className: Chunk786636.giftIcon,
      shouldAnimate: this.state.isHovered
    }) : (0, Chunk54381.jsx)(Chunk925329.Z, {
      game: require,
      size: Chunk925329.A.MEDIUM,
      skuId: module.id
    })
  }
  renderSubtitle() {
    let {
      sku: e,
      entitlements: t,
      application: n
    } = this.props;
    return (0, Chunk164670.K$)(module) ? (0, Chunk54381.jsxs)("div", {
      className: o()(Chunk786636.subtitleHeader, Chunk786636.applicationSubtitleHeader),
      children: [(0, Chunk54381.jsx)(Chunk925329.Z, {
        game: require,
        size: Chunk925329.A.XSMALL,
        skuId: module.id,
        className: Chunk786636.applicationSubtitleIcon
      }), Chunk388032.intl.format(Chunk388032.t["6plpZi"], {
        applicationName: require.name,
        copies: exports.length
      })]
    }) : (0, Chunk54381.jsx)("div", {
      className: Chunk786636.subtitleHeader,
      children: Chunk388032.intl.format(Chunk388032.t.zMcvcA, {
        copies: exports.length
      })
    })
  }
  renderTitle() {
    let e, {
      sku: t,
      subscriptionPlan: n,
      giftCodeBatchId: i
    } = this.props;
    return e = Chunk473749 === Chunk474936.m8 ? Chunk388032.intl.string(Chunk388032.t.odsU6W) : Chunk473749 === Chunk474936.rX && null != require ? Chunk388032.intl.formatToPlainString(require.interval === Chunk474936.rV.MONTH ? Chunk388032.t.uZjpiJ : Chunk388032.t.bJW1EA, {
      skuName: exports.name,
      intervalCount: require.intervalCount
    }) : null == require ? exports.name : Chunk388032.intl.formatToPlainString(require.interval === Chunk474936.rV.MONTH ? Chunk388032.t.rCJvqo : Chunk388032.t.Vd3Iu8, {
      skuName: exports.name,
      intervalCount: require.intervalCount
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk786636.gameName,
      children: module
    })
  }
  renderGenerateGiftCodeRow() {
    return (0, Chunk54381.jsxs)(Chunk600164.Z, {
      justify: Chunk600164.Z.Justify.BETWEEN,
      align: Chunk600164.Z.Align.CENTER,
      className: Chunk786636.generateCodeRow,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: Chunk388032.intl.string(Chunk388032.t.lELyPj)
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
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
      hideCodes: l
    } = this.props, {
      isOpen: c
    } = this.state;
    return (0, Chunk54381.jsxs)(Chunk189907.Z, {
      className: Chunk120356,
      children: [(0, Chunk54381.jsx)(Chunk481060.P3F, {
        onClick: this.handleToggleOpen,
        className: Chunk786636.card,
        onMouseEnter: () => this.setIsHovered(true),
        onMouseLeave: () => this.setIsHovered(false),
        children: (0, Chunk54381.jsx)(Chunk189907.Z.Header, {
          splashArtURL: exports.getSplashURL(x),
          children: (0, Chunk54381.jsxs)("div", {
            className: Chunk786636.cardHeader,
            children: [(0, Chunk54381.jsxs)(Chunk600164.Z, {
              align: Chunk600164.Z.Align.CENTER,
              children: [this.renderGiftIcon(), (0, Chunk54381.jsxs)("div", {
                className: Chunk786636.headerText,
                children: [this.renderTitle(), this.renderSubtitle()]
              })]
            }), (0, Chunk54381.jsx)(Chunk259580.Z, {
              direction: Chunk442837 ? Chunk259580.Z.Directions.UP : Chunk259580.Z.Directions.DOWN,
              className: Chunk786636.expandIcon
            })]
          })
        })
      }), Chunk442837 ? (0, Chunk54381.jsx)(Chunk189907.Z.Body, {
        children: Chunk913527 ? (0, Chunk54381.jsx)(Chunk481060.$jN, {
          className: Chunk786636.spinner
        }) : (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
          children: [require.length < module.length ? this.renderGenerateGiftCodeRow() : null, require.map(e => (0, r.jsx)(j, {
            giftCode: e,
            sku: o,
            hideCode: l
          }, e.code))]
        })
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), L(this, "_loadedAt", null), L(this, "state", {
      isOpen: false,
      isCreating: false,
      isHovered: false
    }), L(this, "handleGenerateGiftCode", async e => {
      e.stopPropagation();
      let {
        skuId: t,
        subscriptionPlanId: n,
        giftStyle: r
      } = this.props;
      this.setState({
        isCreating: true
      }), await _.Z.createGiftCode(t, n, r), this.setState({
        isCreating: false,
        isOpen: true
      })
    }), L(this, "handleToggleOpen", () => {
      let {
        skuId: e,
        subscriptionPlanId: t,
        loadedAt: n
      } = this.props, r = !this.state.isOpen;
      (null == n || null == this._loadedAt || n < this._loadedAt) && r && _.Z.fetchUserGiftCodesForSKU(e, t), this.setState({
        isOpen: !this.state.isOpen
      })
    })
  }
}
let U = Chunk442837.ZP.connectStores([Chunk55563.Z, Chunk246946.Z, Chunk82142.Z, Chunk812206.Z, Chunk509545.Z, Chunk314897.default], e => {
  let {
    skuId: t,
    subscriptionPlanId: n,
    giftStyle: r
  } = e, i = S.Z.get(t);
  if (null == i) throw Error("SKU was unavailable while rendering gift.");
  let a = v.Z.getForGifterSKUAndPlan(O.default.getId(), t, n).filter(e => !e.isClaimed).filter(e => e.giftStyle === r);
  return {
    sku: i,
    hideCodes: I.Z.enabled,
    isFetching: v.Z.getUserGiftCodesFetchingForSKUAndPlan(t, n),
    loadedAt: v.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
    application: h.Z.getApplication(i.applicationId),
    subscriptionPlan: null != n ? (0, R.oE)(n) : null,
    giftCodes: a
  }
})(k)