/** Chunk was on web.js **/
/** chunk id: 411121, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => U
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk869038 = require("./869038.js"),
  Chunk786144 = require("./786144.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk75825 = require("./75825.jsx"),
  Chunk871123 = require("./871123.js"),
  Chunk366523 = require("./366523.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk30793 = require("./30793.js"),
  Chunk351906 = require("./351906.js"),
  Chunk97352 = require("./97352.js"),
  Chunk67480 = require("./67480.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk957565 = require("./957565.js"),
  Chunk45938 = require("./45938.js"),
  Chunk615396 = require("./615396.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk539785 = require("./539785.js");

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
class M extends Chunk64700.PureComponent {
  componentWillUnmount() {
    this._copyModeTimeout.stop()
  }
  get copyButtonText() {
    switch (this.state.copyMode) {
      case f.qCr.SUCCESS:
        return P.intl.string(P.t.XVvPjU);
      case f.qCr.ERROR:
        return P.intl.string(P.t.i4GM3L);
      default:
        return P.intl.string(P.t.OpuAlK)
    }
  }
  handleRevoke(e) {
    p.A.revokeGiftCode(e)
  }
  render() {
    let {
      hideCode: e,
      giftCode: t
    } = this.props, {
      copyMode: n
    } = this.state;
    return (0, r.jsxs)(m.A, {
      direction: m.A.Direction.VERTICAL,
      className: D.Gj,
      children: [(0, r.jsx)(f.e2O, {
        className: D.ph,
        value: (0, N.Zq)(t.code),
        text: this.copyButtonText,
        mode: n,
        supportsCopy: C.p5,
        hideMessage: e ? P.intl.string(P.t["0RLn47"]) : null,
        onCopy: this.handleCopy,
        buttonColor: d.XD.BRAND,
        buttonLook: d.pR.FILLED
      }), (0, r.jsxs)("div", {
        className: D.KB,
        children: [null != t.expiresAt ? (0, r.jsxs)(i.Fragment, {
          children: [P.intl.format(P.t.ltVZcJ, {
            hours: t.expiresAt.diff(l()(), "h")
          }), " —\xa0"]
        }) : null, (0, r.jsx)(f.DUT, {
          tag: "a",
          onClick: () => this.handleRevoke(t.code),
          children: P.intl.string(P.t.v6Yazx)
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), x(this, "_copyModeTimeout", new u.Ep), x(this, "state", {
      copyMode: f.qCr.DEFAULT
    }), x(this, "handleCopy", e => {
      let {
        giftCode: t,
        sku: n
      } = this.props;
      (0, N.AK)(t, n), (0, C.C)(e, () => this.setState({
        copyMode: f.qCr.SUCCESS
      }), () => this.setState({
        copyMode: f.qCr.ERROR
      })), this._copyModeTimeout.start(j, () => {
        this.setState({
          copyMode: f.qCr.DEFAULT
        })
      })
    })
  }
}
class k extends Chunk64700.PureComponent {
  componentDidMount() {
    this._loadedAt = Date.now()
  }
  renderGiftIcon() {
    let {
      sku: e,
      giftStyle: t,
      application: n
    } = this.props;
    return (0, y.bF)(e) ? (0, r.jsx)(b.e, {
      shape: "square",
      sku: e,
      containerClassName: D.ez
    }) : null != t ? (0, r.jsx)(E.A, {
      giftStyle: t,
      className: D.ez,
      shouldAnimate: this.state.isHovered
    }) : (0, r.jsx)(g.A, {
      game: n,
      size: g.M.MEDIUM,
      skuId: e.id
    })
  }
  renderSubtitle() {
    let {
      sku: e,
      entitlements: t,
      application: n
    } = this.props;
    return (0, y.bF)(e) ? (0, r.jsxs)("div", {
      className: s()(D.Oc, D.ic),
      children: [(0, r.jsx)(g.A, {
        game: n,
        size: g.M.XSMALL,
        skuId: e.id,
        className: D._u
      }), P.intl.format(P.t["6plpZi"], {
        applicationName: n.name,
        copies: t.length
      })]
    }) : (0, r.jsx)("div", {
      className: D.Oc,
      children: P.intl.format(P.t.zMcvcA, {
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
    return e = i === w.FB ? P.intl.string(P.t.odsU6W) : i === w.Bu && null != n ? P.intl.formatToPlainString(n.interval === w.WT.MONTH ? P.t.uZjpiJ : P.t.bJW1EA, {
      skuName: t.name,
      intervalCount: n.intervalCount
    }) : null == n ? t.name : P.intl.formatToPlainString(n.interval === w.WT.MONTH ? P.t.rCJvqo : P.t.Vd3Iu8, {
      skuName: t.name,
      intervalCount: n.intervalCount
    }), (0, r.jsx)("div", {
      className: D.mO,
      children: e
    })
  }
  renderGenerateGiftCodeRow() {
    return (0, r.jsxs)(m.A, {
      justify: m.A.Justify.BETWEEN,
      align: m.A.Align.CENTER,
      className: D.pe,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/normal",
        children: P.intl.string(P.t.lELyPj)
      }), (0, r.jsx)(f.Button, {
        variant: "primary",
        size: "sm",
        text: P.intl.string(P.t.Q3Qguo),
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
      sku: s,
      isFetching: o,
      hideCodes: l
    } = this.props, {
      isOpen: c
    } = this.state;
    return (0, r.jsxs)(_.A, {
      className: a,
      children: [(0, r.jsx)(f.DUT, {
        onClick: this.handleToggleOpen,
        className: D.Nr,
        onMouseEnter: () => this.setIsHovered(true),
        onMouseLeave: () => this.setIsHovered(false),
        children: (0, r.jsx)(_.A.Header, {
          splashArtURL: t.getSplashURL(L),
          children: (0, r.jsxs)("div", {
            className: D.MY,
            children: [(0, r.jsxs)(m.A, {
              align: m.A.Align.CENTER,
              children: [this.renderGiftIcon(), (0, r.jsxs)("div", {
                className: D.TK,
                children: [this.renderTitle(), this.renderSubtitle()]
              })]
            }), (0, r.jsx)(T.A, {
              direction: c ? T.A.Directions.UP : T.A.Directions.DOWN,
              className: D.eO
            })]
          })
        })
      }), c ? (0, r.jsx)(_.A.Body, {
        children: o ? (0, r.jsx)(f.y$y, {
          className: D.u1
        }) : (0, r.jsxs)(i.Fragment, {
          children: [n.length < e.length ? this.renderGenerateGiftCodeRow() : null, n.map(e => (0, r.jsx)(M, {
            giftCode: e,
            sku: s,
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
      }), await p.A.createGiftCode(t, n, r), this.setState({
        isCreating: false,
        isOpen: true
      })
    }), x(this, "handleToggleOpen", () => {
      let {
        skuId: e,
        subscriptionPlanId: t,
        loadedAt: n
      } = this.props, r = !this.state.isOpen;
      (null == n || null == this._loadedAt || n < this._loadedAt) && r && p.A.fetchUserGiftCodesForSKU(e, t), this.setState({
        isOpen: !this.state.isOpen
      })
    })
  }
}
let U = Chunk311907.Ay.connectStores([Chunk67480.A, Chunk351906.A, Chunk30793.A, Chunk587895.A, Chunk97352.A, Chunk961350.default], e => {
  let {
    skuId: t,
    subscriptionPlanId: n,
    giftStyle: r
  } = e, i = S.A.get(t);
  if (null == i) throw Error("SKU was unavailable while rendering gift.");
  let a = v.A.getForGifterSKUAndPlan(O.default.getId(), t, n).filter(e => !e.isClaimed).filter(e => e.giftStyle === r);
  return {
    sku: i,
    hideCodes: A.A.enabled,
    isFetching: v.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
    loadedAt: v.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
    application: h.A.getApplication(i.applicationId),
    subscriptionPlan: null != n ? (0, R.c9)(n) : null,
    giftCodes: a
  }
})(k)