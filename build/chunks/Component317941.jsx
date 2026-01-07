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
  Chunk639191 = require("./639191.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let L = 512,
  j = 1e3;
class M extends Chunk473749.PureComponent {
  componentWillUnmount() {
    this._copyModeTimeout.stop()
  }
  get copyButtonText() {
    switch (this.state.copyMode) {
      case f.uA3.SUCCESS:
        return w.intl.string(w.t.XVvPjU);
      case f.uA3.ERROR:
        return w.intl.string(w.t.i4GM3L);
      default:
        return w.intl.string(w.t.OpuAlK)
    }
  }
  handleRevoke(e) {
    p.Z.revokeGiftCode(e)
  }
  render() {
    let {
      hideCode: e,
      giftCode: t
    } = this.props, {
      copyMode: n
    } = this.state;
    return (0, r.jsxs)(h.Z, {
      direction: h.Z.Direction.VERTICAL,
      className: D.giftCodeRow,
      children: [(0, r.jsx)(f.kO8, {
        className: D.codeText,
        value: (0, N.Nz)(t.code),
        text: this.copyButtonText,
        mode: n,
        supportsCopy: A.wS,
        hideMessage: e ? w.intl.string(w.t["0RLn47"]) : null,
        onCopy: this.handleCopy,
        buttonColor: d.Tt.BRAND,
        buttonLook: d.iL.FILLED
      }), (0, r.jsxs)("div", {
        className: D.subTextRow,
        children: [null != t.expiresAt ? (0, r.jsxs)(i.Fragment, {
          children: [w.intl.format(w.t.ltVZcJ, {
            hours: t.expiresAt.diff(l()(), "h")
          }), " —\xa0"]
        }) : null, (0, r.jsx)(f.P3F, {
          tag: "a",
          onClick: () => this.handleRevoke(t.code),
          children: w.intl.string(w.t.v6Yazx)
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), x(this, "_copyModeTimeout", new u.V7), x(this, "state", {
      copyMode: f.uA3.DEFAULT
    }), x(this, "handleCopy", e => {
      let {
        giftCode: t,
        sku: n
      } = this.props;
      (0, N.dM)(t, n), (0, A.JG)(e, () => this.setState({
        copyMode: f.uA3.SUCCESS
      }), () => this.setState({
        copyMode: f.uA3.ERROR
      })), this._copyModeTimeout.start(j, () => {
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
    return (0, b.K$)(e) ? (0, r.jsx)(y.A, {
      shape: "square",
      sku: e,
      containerClassName: D.giftIcon
    }) : null != t ? (0, r.jsx)(E.Z, {
      giftStyle: t,
      className: D.giftIcon,
      shouldAnimate: this.state.isHovered
    }) : (0, r.jsx)(g.Z, {
      game: n,
      size: g.A.MEDIUM,
      skuId: e.id
    })
  }
  renderSubtitle() {
    let {
      sku: e,
      entitlements: t,
      application: n
    } = this.props;
    return (0, b.K$)(e) ? (0, r.jsxs)("div", {
      className: o()(D.subtitleHeader, D.applicationSubtitleHeader),
      children: [(0, r.jsx)(g.Z, {
        game: n,
        size: g.A.XSMALL,
        skuId: e.id,
        className: D.applicationSubtitleIcon
      }), w.intl.format(w.t["6plpZi"], {
        applicationName: n.name,
        copies: t.length
      })]
    }) : (0, r.jsx)("div", {
      className: D.subtitleHeader,
      children: w.intl.format(w.t.zMcvcA, {
        copies: t.length
      })
    })
  }
  renderTitle() {
    let e, {
      sku: t,
      subscriptionPlan: n,
      giftCodeBatchId: i
    } = this.props;
    return e = i === R.m8 ? w.intl.string(w.t.odsU6W) : i === R.rX && null != n ? w.intl.formatToPlainString(n.interval === R.rV.MONTH ? w.t.uZjpiJ : w.t.bJW1EA, {
      skuName: t.name,
      intervalCount: n.intervalCount
    }) : null == n ? t.name : w.intl.formatToPlainString(n.interval === R.rV.MONTH ? w.t.rCJvqo : w.t.Vd3Iu8, {
      skuName: t.name,
      intervalCount: n.intervalCount
    }), (0, r.jsx)("div", {
      className: D.gameName,
      children: e
    })
  }
  renderGenerateGiftCodeRow() {
    return (0, r.jsxs)(h.Z, {
      justify: h.Z.Justify.BETWEEN,
      align: h.Z.Align.CENTER,
      className: D.generateCodeRow,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/normal",
        children: w.intl.string(w.t.lELyPj)
      }), (0, r.jsx)(f.Button, {
        variant: "primary",
        size: "sm",
        text: w.intl.string(w.t.Q3Qguo),
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
    return (0, r.jsxs)(_.Z, {
      className: a,
      children: [(0, r.jsx)(f.P3F, {
        onClick: this.handleToggleOpen,
        className: D.card,
        onMouseEnter: () => this.setIsHovered(true),
        onMouseLeave: () => this.setIsHovered(false),
        children: (0, r.jsx)(_.Z.Header, {
          splashArtURL: t.getSplashURL(L),
          children: (0, r.jsxs)("div", {
            className: D.cardHeader,
            children: [(0, r.jsxs)(h.Z, {
              align: h.Z.Align.CENTER,
              children: [this.renderGiftIcon(), (0, r.jsxs)("div", {
                className: D.headerText,
                children: [this.renderTitle(), this.renderSubtitle()]
              })]
            }), (0, r.jsx)(C.Z, {
              direction: c ? C.Z.Directions.UP : C.Z.Directions.DOWN,
              className: D.expandIcon
            })]
          })
        })
      }), c ? (0, r.jsx)(_.Z.Body, {
        children: s ? (0, r.jsx)(f.$jN, {
          className: D.spinner
        }) : (0, r.jsxs)(i.Fragment, {
          children: [n.length < e.length ? this.renderGenerateGiftCodeRow() : null, n.map(e => (0, r.jsx)(M, {
            giftCode: e,
            sku: o,
            hideCode: l
          }, e.code))]
        })
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), x(this, "_loadedAt", null), x(this, "state", {
      isOpen: false,
      isCreating: false,
      isHovered: false
    }), x(this, "handleGenerateGiftCode", async e => {
      e.stopPropagation();
      let {
        skuId: t,
        subscriptionPlanId: n,
        giftStyle: r
      } = this.props;
      this.setState({
        isCreating: true
      }), await p.Z.createGiftCode(t, n, r), this.setState({
        isCreating: false,
        isOpen: true
      })
    }), x(this, "handleToggleOpen", () => {
      let {
        skuId: e,
        subscriptionPlanId: t,
        loadedAt: n
      } = this.props, r = !this.state.isOpen;
      (null == n || null == this._loadedAt || n < this._loadedAt) && r && p.Z.fetchUserGiftCodesForSKU(e, t), this.setState({
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
  } = e, i = T.Z.get(t);
  if (null == i) throw Error("SKU was unavailable while rendering gift.");
  let a = v.Z.getForGifterSKUAndPlan(O.default.getId(), t, n).filter(e => !e.isClaimed).filter(e => e.giftStyle === r);
  return {
    sku: i,
    hideCodes: S.Z.enabled,
    isFetching: v.Z.getUserGiftCodesFetchingForSKUAndPlan(t, n),
    loadedAt: v.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
    application: m.Z.getApplication(i.applicationId),
    subscriptionPlan: null != n ? (0, P.oE)(n) : null,
    giftCodes: a
  }
})(k)