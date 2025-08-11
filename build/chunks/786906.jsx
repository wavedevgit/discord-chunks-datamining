/** Chunk was on 63141 **/
/** chunk id: 786906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk287734 = require("./287734.js"),
  Chunk933557 = require("./933557.js"),
  Chunk984370 = require("./984370.js"),
  Chunk910611 = require("./910611.js"),
  Chunk131704 = require("./131704.js"),
  Chunk523746 = require("./523746.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk707878 = require("./707878.jsx"),
  Chunk518084 = require("./518084.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk901939 = require("./901939.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class C extends Chunk73800.Component {
  componentDidUpdate() {
    this.props.locked && this.state.showOpacitySlider && this.setState({
      showOpacitySlider: false
    })
  }
  renderCallButton() {
    let e, t, {
      channel: n,
      channelHasActiveCall: r,
      userIsInChannelCall: o,
      isBlocked: l
    } = this.props;
    if (!(0, Chunk131704.hv)(require.type)) return null;
    let s = Chunk481060.Csw,
      c = false;
    return Chunk73800 ? Chunk120356 ? (e = Chunk388032.intl.string(Chunk388032.t["4ry6ys"]), s = Chunk481060.gkL) : e = Chunk388032.intl.string(Chunk388032.t["0D/6R0"]) : l ? (e = Chunk388032.intl.string(Chunk388032.t.PHzjvb), t = Chunk481060.ua7.Colors.RED, c = true) : e = Chunk388032.intl.string(Chunk388032.t.focH1t), <Chunk984370.Z.Icon icon={Chunk442837} tooltip={module} onClick={this.handleClickCall} tooltipColor={exports} disabled={Chunk13245} />
  }
  render() {
    let {
      className: e,
      draggableClassName: t,
      locked: n,
      channel: r,
      channelName: o,
      guild: s,
      onMouseDown: c,
      onContextMenu: d,
      isPreviewingInGame: u,
      disableDragIndicator: f
    } = this.props, {
      showOpacitySlider: g
    } = this.state;
    return Chunk523746 && !require ? <Chunk518084.ZP.Bar className={Chunk901939.opacityHeader}>{<Chunk707878.Z />}{<Chunk984370.Z.Icon icon={Chunk481060.Dio} onClick={this.handleCloseOpacitySettings} tooltip={Chunk388032.intl.string(Chunk388032.t.cpT0Cg)} />}</Chunk518084.ZP.Bar> : <Chunk518084.ZP.Background opacityOverride={require || Chunk933557 ? null : 1}><div className={l()(module, exports, Chunk901939.headerContainer)} onMouseDown={Chunk13245} onContextMenu={Chunk287734}><Chunk984370.Z guildId={Chunk73800.guild_id} channelId={Chunk73800.id} toolbar={this.renderWidgetButtons()} transparent={true}>{Chunk933557 || require || Chunk131704 ? null : <Chunk481060.Vni size={"custom"} color={"currentColor"} className={l()(Chunk901939.dragIcon, exports)} width={20} height={20} />}{(0, Chunk910611.ud)({
            channel: Chunk73800,
            channelName: Chunk120356
          })}{require ? null : (0, Chunk910611.v0)(Chunk73800, Chunk442837)}</Chunk984370.Z></div></Chunk518084.ZP.Background>
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      showOpacitySlider: false
    }), x(this, "handleClickCall", e => {
      let {
        channel: t,
        userIsInChannelCall: n,
        channelHasActiveCall: i
      } = this.props;
      if (i) n ? d.default.selectVoiceChannel(null) : c.Z.callPrivateChannel(t.id, false);
      else {
        let n = !i && !e.shiftKey;
        c.Z.callPrivateChannel(t.id, n)
      }
    }), x(this, "handleOpenOpacitySettings", () => {
      let {
        pinned: e
      } = this.props;
      this.setState({
        showOpacitySlider: true
      }), e && c.Z.setPreviewInGameMode(true)
    }), x(this, "handleCloseOpacitySettings", () => {
      let {
        pinned: e
      } = this.props;
      this.setState({
        showOpacitySlider: false
      }), e && c.Z.setPreviewInGameMode(false)
    }), x(this, "handleMouseDown", e => {
      let {
        onMouseDown: t
      } = this.props;
      null != t && t(e)
    }), x(this, "renderWidgetButtons", () => {
      let {
        locked: e,
        handlePin: t,
        pinned: n
      } = this.props, o = n ? E.intl.string(E.t.cSu80t) : E.intl.string(E.t.cM8Vnp);
      return e ? null : <r.Fragment>{this.renderCallButton()}{n ? <h.Z.Icon icon={a._S3} tooltip={E.intl.string(E.t.OVovCQ)} onClick={this.handleOpenOpacitySettings} /> : null}{<h.Z.Icon icon={n ? a.QVc : a.k5M} tooltip={o} selected={n} onClick={t} />}</r.Fragment>
    })
  }
}

function j(e) {
  var {
    channel: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        o = Object.keys(e);
      for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["channel"]);
  let r = (0, s.e7)([v.Z, m.Z], () => {
      let e = v.Z.getVoiceChannelId();
      return m.Z.getChannel(e)
    }),
    o = (0, s.e7)([y.Z], () => y.Z.getGuild(t.guild_id)),
    l = (0, s.e7)([g.Z], () => g.Z.isCallActive(t.id)),
    a = (0, u.ZP)(t),
    c = (0, s.e7)([O.Z], () => !!t.isDM() && null != t.getRecipientId() && O.Z.isBlocked(t.getRecipientId()));
  return <C{...function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        x(e, t, n[t])
      })
    }
    return e
  }({
    channel: t,
    channelName: a,
    guild: o,
    channelHasActiveCall: l,
    userIsInChannelCall: null != r && r.id === t.id,
    isBlocked: c
  }, n)} />
}