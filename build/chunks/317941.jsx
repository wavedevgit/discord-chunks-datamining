/** Chunk was on 75708 **/
/** chunk id: 317941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk533307 = require("./533307.js"),
  Chunk189907 = require("./189907.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk600164 = require("./600164.js"),
  Chunk925329 = require("./925329.js"),
  Chunk981632 = require("./981632.js"),
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
  Chunk388032 = require("./388032.js"),
  Chunk939672 = require("./939672.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class A extends Chunk73800.PureComponent {
  componentWillUnmount() {
    this._copyModeTimeout.stop()
  }
  get copyButtonText() {
    switch (this.state.copyMode) {
      case Chunk481060.uA3.SUCCESS:
        return Chunk388032.intl.string(Chunk388032.t.XVvPjY);
      case Chunk481060.uA3.ERROR:
        return Chunk388032.intl.string(Chunk388032.t.i4GM3N);
      default:
        return Chunk388032.intl.string(Chunk388032.t.OpuAlJ)
    }
  }
  handleRevoke(e) {
    u.Z.revokeGiftCode(e)
  }
  render() {
    let {
      hideCode: e,
      giftCode: t
    } = this.props, {
      copyMode: n
    } = this.state;
    return <Chunk600164.Z direction={Chunk600164.Z.Direction.VERTICAL} className={Chunk939672.giftCodeRow}>{<Chunk481060.kO8 className={Chunk939672.codeText} value={(0, Chunk669079.Nz)(exports.code)} text={this.copyButtonText} mode={require} supportsCopy={Chunk572004.wS} hideMessage={module ? Chunk388032.intl.string(Chunk388032.t["0RLn4+"]) : null} onCopy={this.handleCopy} buttonColor={Chunk755721.Tt.BRAND} buttonLook={Chunk755721.iL.FILLED} />}{<div className={Chunk939672.subTextRow}>{null != exports.expiresAt ? <Chunk73800.Fragment>{Chunk388032.intl.format(Chunk388032.t.ltVZcH, {
            hours: exports.expiresAt.diff(a()(), "h")
          })}{" —\xa0"}</Chunk73800.Fragment> : null}{<Chunk481060.P3F tag={"a"} onClick={() => this.handleRevoke(exports.code)}>{Chunk388032.intl.string(Chunk388032.t.v6Yaz8)}</Chunk481060.P3F>}</div>}</Chunk600164.Z>
  }
  constructor(...e) {
    super(...e), y(this, "_copyModeTimeout", new o.V7), y(this, "state", {
      copyMode: d.uA3.DEFAULT
    }), y(this, "handleCopy", e => {
      let {
        giftCode: t,
        sku: n
      } = this.props;
      (0, v.dM)(t, n), (0, O.JG)(e, () => this.setState({
        copyMode: d.uA3.SUCCESS
      }), () => this.setState({
        copyMode: d.uA3.ERROR
      })), this._copyModeTimeout.start(1e3, () => {
        this.setState({
          copyMode: d.uA3.DEFAULT
        })
      })
    })
  }
}
class P extends Chunk73800.PureComponent {
  componentDidMount() {
    this._loadedAt = Date.now()
  }
  renderTitle() {
    let e, {
      sku: t,
      subscriptionPlan: n,
      giftCodeBatchId: r
    } = this.props;
    return e = Chunk73800 === Chunk474936.m8 ? Chunk388032.intl.string(Chunk388032.t.odsU6e) : Chunk73800 === Chunk474936.rX && null != require ? Chunk388032.intl.formatToPlainString(require.interval === Chunk474936.rV.MONTH ? Chunk388032.t.uZjpiI : Chunk388032.t.bJW1EB, {
      skuName: exports.name,
      intervalCount: require.intervalCount
    }) : null == require ? exports.name : Chunk388032.intl.formatToPlainString(require.interval === Chunk474936.rV.MONTH ? Chunk388032.t.rCJvqq : Chunk388032.t.Vd3Iu7, {
      skuName: exports.name,
      intervalCount: require.intervalCount
    }), <div className={Chunk939672.gameName}>{module}</div>
  }
  renderGenerateGiftCodeRow() {
    return <Chunk600164.Z justify={Chunk600164.Z.Justify.BETWEEN} align={Chunk600164.Z.Align.CENTER} className={Chunk939672.generateCodeRow}>{<Chunk481060.Text variant={"text-md/normal"}>{Chunk388032.intl.string(Chunk388032.t.lELyPj)}</Chunk481060.Text>}{<Chunk481060.zxk variant={"primary"} size={"sm"} text={Chunk388032.intl.string(Chunk388032.t.Q3Qgur)} loading={this.state.isCreating} onClick={this.handleGenerateGiftCode} />}</Chunk600164.Z>
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
      className: s,
      sku: a,
      isFetching: l,
      hideCodes: o,
      giftStyle: c
    } = this.props, {
      isOpen: u
    } = this.state;
    return <Chunk189907.Z className={Chunk913527}>{<Chunk481060.P3F onClick={this.handleToggleOpen} className={Chunk939672.card} onMouseEnter={() => this.setIsHovered(true)} onMouseLeave={() => this.setIsHovered(false)}><Chunk189907.Z.Header splashArtURL={exports.getSplashURL(512)}><div className={Chunk939672.cardHeader}>{<Chunk600164.Z align={Chunk600164.Z.Align.CENTER}>{null != Chunk755721 ? <Chunk981632.Z giftStyle={Chunk755721} className={Chunk939672.seasonalGiftBox} shouldAnimate={this.state.isHovered} /> : <Chunk925329.Z game={exports} size={Chunk925329.Z.Sizes.MEDIUM} skuId={a.id} />}{<div className={Chunk939672.headerText}>{this.renderTitle()}{<div className={Chunk939672.subTextHeader}>{Chunk388032.intl.format(Chunk388032.t.zMcvcH, {
                    copies: module.length
                  })}</div>}</div>}</Chunk600164.Z>}{<Chunk259580.Z direction={Chunk533307 ? Chunk259580.Z.Directions.UP : Chunk259580.Z.Directions.DOWN} className={Chunk939672.expandIcon} />}</div></Chunk189907.Z.Header></Chunk481060.P3F>}{Chunk533307 ? <Chunk189907.Z.Body>{Chunk442837 ? (0, Chunk255367.jsx)(Chunk481060.$jN, {
          className: Chunk939672.spinner
        }) : (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
          children: [require.length < module.length ? this.renderGenerateGiftCodeRow() : null, require.map(e => (0, i.jsx)(A, {
            giftCode: e,
            sku: a,
            hideCode: o
          }, e.code))]
        })}</Chunk189907.Z.Body> : null}</Chunk189907.Z>
  }
  constructor(...e) {
    super(...e), y(this, "_loadedAt", null), y(this, "state", {
      isOpen: false,
      isCreating: false,
      isHovered: false
    }), y(this, "handleGenerateGiftCode", async e => {
      e.stopPropagation();
      let {
        skuId: t,
        subscriptionPlanId: n,
        giftStyle: i
      } = this.props;
      this.setState({
        isCreating: true
      }), await u.Z.createGiftCode(t, n, i), this.setState({
        isCreating: false,
        isOpen: true
      })
    }), y(this, "handleToggleOpen", () => {
      let {
        skuId: e,
        subscriptionPlanId: t,
        loadedAt: n
      } = this.props, i = !this.state.isOpen;
      (null == n || null == this._loadedAt || n < this._loadedAt) && i && u.Z.fetchUserGiftCodesForSKU(e, t), this.setState({
        isOpen: !this.state.isOpen
      })
    })
  }
}
let R = Chunk442837.ZP.connectStores([Chunk55563.Z, Chunk246946.Z, Chunk82142.Z, Chunk812206.Z, Chunk509545.Z, Chunk314897.default], e => {
  let {
    skuId: t,
    subscriptionPlanId: n,
    giftStyle: i
  } = e, r = E.Z.get(t);
  if (null == r) throw Error("SKU was unavailable while rendering gift.");
  let s = x.Z.getForGifterSKUAndPlan(b.default.getId(), t, n).filter(e => !e.isClaimed).filter(e => e.giftStyle === i);
  return {
    sku: r,
    hideCodes: _.Z.enabled,
    isFetching: x.Z.getUserGiftCodesFetchingForSKUAndPlan(t, n),
    loadedAt: x.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
    application: p.Z.getApplication(r.applicationId),
    subscriptionPlan: null != n ? (0, S.oE)(n) : null,
    giftCodes: s
  }
})(P)