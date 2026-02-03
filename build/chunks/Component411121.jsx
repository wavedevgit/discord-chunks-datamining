/** Chunk was on 9207 **/
/** chunk id: 411121, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
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

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class L extends Chunk64700.PureComponent {
  componentWillUnmount() {
    this._copyModeTimeout.stop()
  }
  get copyButtonText() {
    switch (this.state.copyMode) {
      case _.qCr.SUCCESS:
        return P.intl.string(P.t.XVvPjU);
      case _.qCr.ERROR:
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
    return (0, r.jsxs)(A.A, {
      direction: A.A.Direction.VERTICAL,
      className: R.Gj,
      children: [(0, r.jsx)(_.e2O, {
        className: R.ph,
        value: (0, j.Zq)(t.code),
        text: this.copyButtonText,
        mode: n,
        supportsCopy: N.p5,
        hideMessage: e ? P.intl.string(P.t["0RLn47"]) : null,
        onCopy: this.handleCopy,
        buttonColor: u.XD.BRAND,
        buttonLook: u.pR.FILLED
      }), (0, r.jsxs)("div", {
        className: R.KB,
        children: [null != t.expiresAt ? (0, r.jsxs)(i.Fragment, {
          children: [P.intl.format(P.t.ltVZcJ, {
            hours: t.expiresAt.diff(o()(), "h")
          }), " —\xa0"]
        }) : null, (0, r.jsx)(_.DUT, {
          tag: "a",
          onClick: () => this.handleRevoke(t.code),
          children: P.intl.string(P.t.v6Yazx)
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), D(this, "_copyModeTimeout", new d.Ep), D(this, "state", {
      copyMode: _.qCr.DEFAULT
    }), D(this, "handleCopy", e => {
      let {
        giftCode: t,
        sku: n
      } = this.props;
      (0, j.AK)(t, n), (0, N.C)(e, () => this.setState({
        copyMode: _.qCr.SUCCESS
      }), () => this.setState({
        copyMode: _.qCr.ERROR
      })), this._copyModeTimeout.start(1e3, () => {
        this.setState({
          copyMode: _.qCr.DEFAULT
        })
      })
    })
  }
}
class w extends Chunk64700.PureComponent {
  componentDidMount() {
    this._loadedAt = Date.now()
  }
  renderGiftIcon() {
    let {
      sku: e,
      giftStyle: t,
      application: n
    } = this.props;
    return (0, h.bF)(e) ? (0, r.jsx)(E.e, {
      shape: "square",
      sku: e,
      containerClassName: R.ez
    }) : null != t ? (0, r.jsx)(b.A, {
      giftStyle: t,
      className: R.ez,
      shouldAnimate: this.state.isHovered
    }) : (0, r.jsx)(f.A, {
      game: n,
      size: f.M.MEDIUM,
      skuId: e.id
    })
  }
  renderSubtitle() {
    let {
      sku: e,
      entitlements: t,
      application: n
    } = this.props;
    return (0, h.bF)(e) ? (0, r.jsxs)("div", {
      className: s()(R.Oc, R.ic),
      children: [(0, r.jsx)(f.A, {
        game: n,
        size: f.M.XSMALL,
        skuId: e.id,
        className: R._u
      }), P.intl.format(P.t["6plpZi"], {
        applicationName: n.name,
        copies: t.length
      })]
    }) : (0, r.jsx)("div", {
      className: R.Oc,
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
    return e = i === v.FB ? P.intl.string(P.t.odsU6W) : i === v.Bu && null != n ? P.intl.formatToPlainString(n.interval === v.WT.MONTH ? P.t.uZjpiJ : P.t.bJW1EA, {
      skuName: t.name,
      intervalCount: n.intervalCount
    }) : null == n ? t.name : P.intl.formatToPlainString(n.interval === v.WT.MONTH ? P.t.rCJvqo : P.t.Vd3Iu8, {
      skuName: t.name,
      intervalCount: n.intervalCount
    }), (0, r.jsx)("div", {
      className: R.mO,
      children: e
    })
  }
  renderGenerateGiftCodeRow() {
    return (0, r.jsxs)(A.A, {
      justify: A.A.Justify.BETWEEN,
      align: A.A.Align.CENTER,
      className: R.pe,
      children: [(0, r.jsx)(_.Text, {
        variant: "text-md/normal",
        children: P.intl.string(P.t.lELyPj)
      }), (0, r.jsx)(_.Button, {
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
      className: l,
      sku: s,
      isFetching: a,
      hideCodes: o
    } = this.props, {
      isOpen: c
    } = this.state;
    return (0, r.jsxs)(m.A, {
      className: l,
      children: [(0, r.jsx)(_.DUT, {
        onClick: this.handleToggleOpen,
        className: R.Nr,
        onMouseEnter: () => this.setIsHovered(true),
        onMouseLeave: () => this.setIsHovered(false),
        children: (0, r.jsx)(m.A.Header, {
          splashArtURL: t.getSplashURL(512),
          children: (0, r.jsxs)("div", {
            className: R.MY,
            children: [(0, r.jsxs)(A.A, {
              align: A.A.Align.CENTER,
              children: [this.renderGiftIcon(), (0, r.jsxs)("div", {
                className: R.TK,
                children: [this.renderTitle(), this.renderSubtitle()]
              })]
            }), (0, r.jsx)(I.A, {
              direction: c ? I.A.Directions.UP : I.A.Directions.DOWN,
              className: R.eO
            })]
          })
        })
      }), c ? (0, r.jsx)(m.A.Body, {
        children: a ? (0, r.jsx)(_.y$y, {
          className: R.u1
        }) : (0, r.jsxs)(i.Fragment, {
          children: [n.length < e.length ? this.renderGenerateGiftCodeRow() : null, n.map(e => (0, r.jsx)(L, {
            giftCode: e,
            sku: s,
            hideCode: o
          }, e.code))]
        })
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), D(this, "_loadedAt", null), D(this, "state", {
      isOpen: false,
      isCreating: false,
      isHovered: false
    }), D(this, "handleGenerateGiftCode", async e => {
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
    }), D(this, "handleToggleOpen", () => {
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
let M = Chunk311907.Ay.connectStores([Chunk67480.A, Chunk351906.A, Chunk30793.A, Chunk587895.A, Chunk97352.A, Chunk961350.default], e => {
  let {
    skuId: t,
    subscriptionPlanId: n,
    giftStyle: r
  } = e, i = T.A.get(t);
  if (null == i) throw Error("SKU was unavailable while rendering gift.");
  let l = x.A.getForGifterSKUAndPlan(O.default.getId(), t, n).filter(e => !e.isClaimed).filter(e => e.giftStyle === r);
  return {
    sku: i,
    hideCodes: C.A.enabled,
    isFetching: x.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
    loadedAt: x.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
    application: g.A.getApplication(i.applicationId),
    subscriptionPlan: null != n ? (0, y.c9)(n) : null,
    giftCodes: l
  }
})(w)