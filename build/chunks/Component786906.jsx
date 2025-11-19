/** Chunk was on 63141 **/
/** chunk id: 786906, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk287734 = require("./287734.js"),
  Chunk933557 = require("./933557.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk910611 = require("./910611.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk523746 = require("./523746.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk707878 = require("./707878.jsx"),
  Chunk518084 = require("./518084.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk846602 = require("./846602.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class Z extends Chunk473749.Component {
  componentDidUpdate() {
    this.props.locked && this.state.showOpacitySlider && this.setState({
      showOpacitySlider: false
    })
  }
  renderCallButton() {
    let e, t, {
      channel: n,
      channelHasActiveCall: r,
      userIsInChannelCall: s,
      isBlocked: o
    } = this.props;
    if (!(0, Chunk131704.hv)(require.type)) return null;
    let l = Chunk481060.Csw,
      c = false;
    return Chunk473749 ? Chunk120356 ? (e = Chunk388032.intl.string(Chunk388032.t["4ry6yi"]), l = Chunk481060.gkL) : e = Chunk388032.intl.string(Chunk388032.t["0D/6Rz"]) : o ? (e = Chunk388032.intl.string(Chunk388032.t.PHzjvX), t = Chunk481060.aML.Colors.RED, c = true) : e = Chunk388032.intl.string(Chunk388032.t.focH1t), (0, Chunk54381.jsx)(Chunk984370.Z.Icon, {
      icon: Chunk442837,
      tooltip: module,
      onClick: this.handleClickCall,
      tooltipColor: exports,
      disabled: Chunk13245
    })
  }
  render() {
    let {
      className: e,
      draggableClassName: t,
      locked: n,
      channel: r,
      channelName: s,
      guild: l,
      onMouseDown: c,
      onContextMenu: d,
      isPreviewingInGame: u,
      disableDragIndicator: f
    } = this.props, {
      showOpacitySlider: g
    } = this.state;
    return Chunk523746 && !require ? (0, Chunk54381.jsxs)(Chunk518084.ZP.Bar, {
      className: Chunk846602.opacityHeader,
      children: [(0, Chunk54381.jsx)(Chunk707878.Z, {}), (0, Chunk54381.jsx)(Chunk984370.Z.Icon, {
        icon: Chunk481060.Dio,
        onClick: this.handleCloseOpacitySettings,
        tooltip: Chunk388032.intl.string(Chunk388032.t.cpT0Cq)
      })]
    }) : (0, Chunk54381.jsx)(Chunk518084.ZP.Background, {
      opacityOverride: require || Chunk933557 ? null : 1,
      children: (0, Chunk54381.jsx)("div", {
        className: o()(module, exports, Chunk846602.headerContainer),
        onMouseDown: Chunk13245,
        onContextMenu: Chunk287734,
        children: (0, Chunk54381.jsxs)(Chunk984370.Z, {
          guildId: Chunk473749.guild_id,
          channelId: Chunk473749.id,
          toolbar: this.renderWidgetButtons(),
          transparent: true,
          children: [Chunk933557 || require || Chunk131704 ? null : (0, Chunk54381.jsx)(Chunk481060.Vni, {
            size: "custom",
            color: "currentColor",
            className: o()(Chunk846602.dragIcon, exports),
            width: 20,
            height: 20
          }), (0, Chunk910611.ud)({
            channel: Chunk473749,
            channelName: Chunk120356
          }), require ? null : (0, Chunk910611.v0)(Chunk473749, Chunk442837)]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      showOpacitySlider: false
    }), S(this, "handleClickCall", e => {
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
    }), S(this, "handleOpenOpacitySettings", () => {
      let {
        pinned: e
      } = this.props;
      this.setState({
        showOpacitySlider: true
      }), e && c.Z.setPreviewInGameMode(true)
    }), S(this, "handleCloseOpacitySettings", () => {
      let {
        pinned: e
      } = this.props;
      this.setState({
        showOpacitySlider: false
      }), e && c.Z.setPreviewInGameMode(false)
    }), S(this, "handleMouseDown", e => {
      let {
        onMouseDown: t
      } = this.props;
      null != t && t(e)
    }), S(this, "renderWidgetButtons", () => {
      let {
        locked: e,
        handlePin: t,
        pinned: n
      } = this.props, s = n ? E.intl.string(E.t.cSu80j) : E.intl.string(E.t.cM8Vnm);
      return e ? null : (0, i.jsxs)(r.Fragment, {
        children: [this.renderCallButton(), n ? (0, i.jsx)(h.Z.Icon, {
          icon: a._S3,
          tooltip: E.intl.string(E.t.OVovCb),
          onClick: this.handleOpenOpacitySettings
        }) : null, (0, i.jsx)(h.Z.Icon, {
          icon: n ? a.QVc : a.k5M,
          tooltip: s,
          selected: n,
          onClick: t
        })]
      })
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
        s = Object.keys(e);
      for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["channel"]);
  let r = (0, l.e7)([v.Z, m.Z], () => {
      let e = v.Z.getVoiceChannelId();
      return m.Z.getChannel(e)
    }),
    s = (0, l.e7)([y.Z], () => y.Z.getGuild(t.guild_id)),
    o = (0, l.e7)([g.Z], () => g.Z.isCallActive(t.id)),
    a = (0, u.ZP)(t),
    c = (0, l.e7)([b.Z], () => !!t.isDM() && null != t.getRecipientId() && b.Z.isBlocked(t.getRecipientId()));
  return (0, i.jsx)(Z, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        S(e, t, n[t])
      })
    }
    return e
  }({
    channel: t,
    channelName: a,
    guild: s,
    channelHasActiveCall: o,
    userIsInChannelCall: null != r && r.id === t.id,
    isBlocked: c
  }, n))
}