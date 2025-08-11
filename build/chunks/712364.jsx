/** Chunk was on web.js **/
/** chunk id: 712364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk573855 = require("./573855.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends(r = Chunk73800.PureComponent) {
  render() {
    var e;
    let {
      title: t,
      actionText: n,
      children: r,
      error: a,
      isLoading: d,
      maxLength: f,
      transitionState: _,
      helpMessage: p,
      retryPrompt: h,
      retrySuccessMessage: m
    } = this.props, {
      code: g,
      errorMessage: E,
      retrySuccess: b
    } = this.state, y = Chunk73800.Children.count(r) > 0 ? <Chunk481060.Zbd type={Chunk481060.Zbd.Types.WARNING} className={Chunk573855.card}><Chunk481060.Text variant={"text-md/normal"}>{r}</Chunk481060.Text></Chunk481060.Zbd> : null, O = null != h ? <Chunk481060.Text className={s()(Chunk573855.__invalid_submitText, Chunk573855.spacing)} variant={"text-sm/normal"}>{<br />}{<Chunk481060.P3F className={s()(Chunk573855.spacing, Chunk573855.__invalid_link)} onClick={this.handleRetry}><Chunk481060.eee>{h}</Chunk481060.eee></Chunk481060.P3F>}</Chunk481060.Text> : null, v = b ? <Chunk481060.Zbd type={Chunk481060.Zbd.Types.SUCCESS} className={Chunk573855.card}><Chunk481060.Text variant={"text-md/normal"}>{m}</Chunk481060.Text></Chunk481060.Zbd> : null;
    return <Chunk481060.Y0X transitionState={_} parentComponent={"MFAConfirm"}><form onSubmit={this.handleSubmit}>{<Chunk481060.xBx separator={false}><Chunk481060.X6q variant={"heading-lg/semibold"}>{exports}</Chunk481060.X6q></Chunk481060.xBx>}{<Chunk481060.hzk>{null != p ? <Chunk481060.Text color={"text-default"} variant={"text-md/normal"} className={Chunk573855.spacing}>{p}</Chunk481060.Text> : null}{y}{v}{<Chunk481060.xJW title={this.getLabelText()} className={Chunk573855.spacing}>{<Chunk481060.oil inputRef={this.setRef} onChange={this.handleCodeChange} placeholder={null != (e = this.getPlaceholder()) ? module : true} maxLength={null != f ? f : 10} value={g} autoComplete={"one-time-code"} autoFocus={true} />}{this.errorPresent() ? <Chunk481060.Text color={"text-danger"} variant={"text-xs/normal"} className={Chunk573855.error}>{null != Chunk120356 ? Chunk120356 : E}</Chunk481060.Text> : null}{O}</Chunk481060.xJW>}</Chunk481060.hzk>}{<Chunk481060.mzw><Chunk481060.hE2 direction={"horizontal-reverse"}>{<Chunk481060.zxk variant={"primary"} text={null != require ? require : Chunk388032.intl.string(Chunk388032.t["cY+Ooa"])} type={"submit"} disabled={d || 0 === g.length} />}{<Chunk481060.zxk variant={"secondary"} text={Chunk388032.intl.string(Chunk388032.t["ETE/oK"])} onClick={this.handleCancel} disabled={d} />}</Chunk481060.hE2></Chunk481060.mzw>}</form></Chunk481060.Y0X>
  }
  constructor(...e) {
    super(...e), d(this, "_input", true), d(this, "state", {
      code: "",
      errorMessage: "",
      retrySuccess: false
    }), d(this, "setRef", e => {
      this._input = e
    }), d(this, "getLabelText", () => {
      var e;
      return null != (e = this.props.label) ? e : this.props.disallowBackupCodes ? c.intl.string(c.t.HZPBOT) : c.intl.string(c.t["+NQopK"])
    }), d(this, "getSupportedCodeTypes", () => this.props.disallowBackupCodes ? c.intl.string(c.t.tARzgo) : c.intl.string(c.t.yO4lAA)), d(this, "getPlaceholder", () => {
      var e;
      return this.props.forceNoPlaceholder ? null : null != (e = this.props.placeholder) ? e : this.getSupportedCodeTypes()
    }), d(this, "errorPresent", () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage), d(this, "handleRetry", () => {
      let {
        onRetry: e
      } = this.props;
      null == e || e().then(() => this.setState({
        retrySuccess: true
      }))
    }), d(this, "handleSubmit", e => {
      e.preventDefault();
      let {
        handleSubmit: t,
        onError: n
      } = this.props;
      t(this.state.code).catch(e => {
        null != e.body && (null == n || n(e.body), e.body.message && this.setState({
          errorMessage: e.body.message
        }))
      })
    }), d(this, "handleCancel", () => {
      let {
        onClose: e,
        handleEarlyClose: t
      } = this.props;
      e(), null == t || t()
    }), d(this, "handleCodeChange", e => {
      this.setState({
        code: e
      })
    })
  }
}
d(f, "defaultProps", {
  btnClass: "",
  isLoading: false,
  disallowBackupCodes: false,
  error: null,
  forceNoPlaceholder: false
});
let _ = f