/** Chunk was on 75708 **/
/** chunk id: 415795, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $W: () => I,
  Mx: () => A,
  PZ: () => N,
  h4: () => P,
  ic: () => T,
  n5: () => y,
  rU: () => R,
  s8: () => D
}), require("./388685.js"), require("./35282.js");
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
  Chunk815372 = require("./815372.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk16206 = require("./16206.js"),
  Chunk790145 = require("./790145.js"),
  Chunk925329 = require("./925329.js"),
  Chunk565138 = require("./565138.js"),
  Chunk754688 = require("./754688.js"),
  Chunk237583 = require("./237583.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk212522 = require("./212522.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class S extends Chunk73800.PureComponent {
  componentDidMount() {
    let {
      focused: e,
      onFocus: t
    } = this.props, {
      node: n
    } = this;
    module && null != require && exports(require)
  }
  componentDidUpdate(e) {
    let {
      focused: t,
      onFocus: n
    } = this.props, {
      node: i
    } = this;
    null != i && t && !e.focused && n(i)
  }
  render() {
    let {
      focused: e,
      children: t,
      score: n,
      onContextMenu: i,
      id: s,
      "aria-label": l
    } = this.props;
    return <Chunk481060.P3F role={"option"} id={Chunk73800} aria-label={Chunk456100} aria-selected={module} focusProps={{
        enabled: false
      }} tabIndex={false} innerRef={this.setRef} className={Chunk212522.result} onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onContextMenu={i}>{exports}{null != require ? <div className={Chunk212522.score}>{require >> 0}</div> : null}</Chunk481060.P3F>
  }
  constructor(...e) {
    super(...e), v(this, "node", true), v(this, "handleClick", e => {
      e.preventDefault();
      let {
        onClick: t
      } = this.props, {
        node: n
      } = this;
      null != n && t(e, n)
    }), v(this, "handleMouseEnter", e => {
      let {
        onMouseEnter: t
      } = this.props, {
        node: n
      } = this;
      null != n && t(e, n)
    }), v(this, "setRef", e => {
      this.node = e
    })
  }
}
class T extends Chunk73800.Component {
  renderIcon() {
    let {
      guild: e
    } = this.props;
    return <div className={Chunk212522.guildIconContainer}><Chunk565138.Z tabIndex={false} guild={module} size={Chunk565138.Z.Sizes.MINI} className={Chunk212522.guildIcon} /></div>
  }
  renderName() {
    let {
      guild: e
    } = this.props;
    return <div className={Chunk212522.name}><span className={Chunk212522.match}>{module.name}</span></div>
  }
  renderContent() {
    let {
      unread: e,
      children: t
    } = this.props;
    return <div className={module ? Chunk212522.contentUnread : Chunk212522.contentDefault}>{this.renderIcon()}{this.renderName()}{<div className={Chunk212522.misc}>{exports}</div>}</div>
  }
  getAccessibilityLabel() {
    let {
      guild: e
    } = this.props;
    return Chunk388032.intl.formatToPlainString(Chunk388032.t.WVq3Li, {
      name: module.name
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: i,
      focused: s,
      score: a,
      id: l
    } = this.props;
    return <S id={Chunk456100} aria-label={this.getAccessibilityLabel()} onMouseEnter={module} onClick={exports} onFocus={require} onContextMenu={i} focused={Chunk73800} score={Chunk481060}>{this.renderContent()}</S>
  }
}
class I extends(i = Chunk73800.Component) {
  renderIcon() {
    var e;
    let {
      channel: t
    } = this.props, n = (0, Chunk471445.KS)(exports);
    if (null == require) return null;
    let i = null != (e = (0, Chunk16206.Z)(exports)) ? module : "";
    return <div className={Chunk212522.iconContainer} role={"img"} aria-label={i}><require className={Chunk212522.icon} size={"xs"} color={"currentColor"} /></div>
  }
  renderName() {
    let e, t, {
      mentions: n,
      category: i,
      channel: s,
      isMentionLowImportance: a
    } = this.props;
    return null != require && require > 0 && (e = <Chunk790145.Z className={Chunk212522.badge} value={require} lowImportance={Chunk481060} />), null != i && (t = <span className={Chunk212522.note}>{(0, Chunk933557.F6)(i, Chunk594174.default, Chunk699516.Z)}</span>), <div className={Chunk212522.name}>{<span className={Chunk212522.match}>{(0, Chunk933557.F6)(Chunk73800, Chunk594174.default, Chunk699516.Z)}</span>}{module}{this.renderVoiceStates()}{exports}</div>
  }
  renderVoiceStates() {
    let {
      voiceStates: e,
      channel: t
    } = this.props;
    return null == module ? null : <Chunk237583.Z className={Chunk212522.voiceSummaryContainer} guildId={exports.guild_id} users={module.map(e => {
        let {
          user: t
        } = e;
        return {
          user: t
        }
      })} max={4} />
  }
  renderContent() {
    let {
      unread: e,
      mentions: t,
      children: n
    } = this.props;
    return <div aria-hidden={true} className={module || null != exports && exports > 0 ? Chunk212522.contentUnread : Chunk212522.contentDefault}>{this.renderIcon()}{this.renderName()}{<div className={Chunk212522.misc}>{require}</div>}</div>
  }
  getAccessibilityLabel() {
    var e;
    let {
      channel: t
    } = this.props, n = null == (e = Chunk430824.Z.getGuild(this.props.channel.guild_id)) ? true : module.name, i = (0, Chunk933557.F6)(exports, Chunk594174.default, Chunk699516.Z), r = (0, Chunk16206.Z)(exports);
    return Chunk388032.intl.formatToPlainString(Chunk388032.t["Vw/da2"], {
      name: i,
      type: Chunk255367,
      guild: require
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: i,
      focused: s,
      score: a,
      id: l
    } = this.props;
    return <S id={Chunk456100} aria-label={this.getAccessibilityLabel()} onMouseEnter={module} onClick={exports} onFocus={require} onContextMenu={i} focused={Chunk73800} score={Chunk481060}>{this.renderContent()}</S>
  }
}
v(I, "defaultProps", {
  unread: false
});
class N extends Chunk73800.Component {
  renderIcon() {
    let {
      channel: e
    } = this.props;
    return <div className={Chunk212522.dmIconContainer}><Chunk481060.qEK src={(0, Chunk43267.x)(module)} size={Chunk481060.EFr.SIZE_20} aria-hidden={true} /></div>
  }
  renderName() {
    let e, {
      mentions: t,
      channel: n
    } = this.props;
    return null != exports && exports > 0 && (e = <Chunk790145.Z className={Chunk212522.badge} value={exports} />), <div className={Chunk212522.name}>{<span className={Chunk212522.match}>{(0, Chunk933557.F6)(require, Chunk594174.default, Chunk699516.Z)}</span>}{module}</div>
  }
  renderContent() {
    let {
      mentions: e,
      children: t
    } = this.props;
    return <div className={null != module && module > 0 ? Chunk212522.contentUnread : Chunk212522.contentDefault}>{this.renderIcon()}{this.renderName()}{<div className={Chunk212522.misc}>{exports}</div>}</div>
  }
  getAccessibilityLabel() {
    let {
      channel: e,
      mentions: t
    } = this.props, n = (0, Chunk933557.F6)(module, Chunk594174.default, Chunk699516.Z);
    return null != exports && exports > 0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.LYdVfH, {
      name: require,
      mentions: exports
    }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.lLSbnp, {
      name: require
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: i,
      focused: s,
      score: a,
      id: l
    } = this.props;
    return <S id={Chunk456100} aria-label={this.getAccessibilityLabel()} onMouseEnter={module} onClick={exports} onFocus={require} onContextMenu={i} focused={Chunk73800} score={Chunk481060}>{this.renderContent()}</S>
  }
}
class y extends Chunk73800.Component {
  renderIcon() {
    let {
      user: e
    } = this.props;
    return <div className={Chunk212522.iconContainer}><Chunk481060.qEK src={module.getAvatarURL(true, 20)} aria-hidden={true} size={Chunk481060.EFr.SIZE_20} /></div>
  }
  getDisplayNickname() {
    let e, {
        user: t,
        comparator: n
      } = this.props,
      i = Chunk699516.Z.getNickname(exports.id);
    return ((e = require === exports.tag || null == require || "" === require ? exports.username : require) === exports.username || module === exports.id) && (e = null != i ? i : Chunk51144.ZP.getName(exports)), module
  }
  renderName() {
    let e, {
        user: t,
        mentions: n
      } = this.props,
      i = this.getDisplayNickname();
    return null != require && require > 0 && (e = <Chunk790145.Z className={Chunk212522.badge} value={require} />), <div className={Chunk212522.name}>{<span className={Chunk212522.match}>{i}</span>}{module}{<span className={Chunk212522.username}>{Chunk51144.ZP.getUserTag(exports)}</span>}</div>
  }
  renderContent() {
    let {
      children: e,
      mentions: t
    } = this.props;
    return <div className={null != exports && exports > 0 ? Chunk212522.contentUnread : Chunk212522.contentDefault}>{this.renderIcon()}{this.renderName()}{<div className={Chunk212522.misc}>{module}</div>}</div>
  }
  getAccessibilityLabel() {
    let {
      mentions: e,
      user: t
    } = this.props, n = this.getDisplayNickname(), i = Chunk51144.ZP.getUserTag(exports);
    return null != module && module > 0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["6b9Ura"], {
      name: require,
      id: i,
      mentions: module
    }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.GWYOAQ, {
      name: require,
      id: i
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: i,
      focused: s,
      score: a,
      id: l
    } = this.props;
    return <S id={Chunk456100} aria-label={this.getAccessibilityLabel()} onMouseEnter={module} onClick={exports} onFocus={require} onContextMenu={i} focused={Chunk73800} score={Chunk481060}>{this.renderContent()}</S>
  }
}
class A extends Chunk73800.Component {
  renderContent() {
    let {
      children: e,
      application: t
    } = this.props;
    return <div className={Chunk212522.contentDefault}>{<div className={Chunk212522.iconContainer}><Chunk925329.Z tabIndex={false} className={Chunk212522.gameIcon} game={exports} size={Chunk212522.gameIconSize} /></div>}{exports.name}{<div className={Chunk212522.misc}>{module}</div>}</div>
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      focused: i,
      id: s
    } = this.props;
    return <S id={Chunk73800} onMouseEnter={module} onClick={exports} onFocus={require} focused={i}>{this.renderContent()}</S>
  }
}
class P extends Chunk73800.Component {
  render() {
    return <div className={Chunk212522.__invalid_resultDefault}><div className={Chunk212522.contentDefault}><div className={Chunk212522.header}>{this.props.children}</div></div></div>
  }
}
class R extends Chunk73800.Component {
  renderContent() {
    let e, t, {
        link: n,
        children: i
      } = this.props,
      s = (0, Chunk754688.Qj)(require.path);
    return null == Chunk73800 || true === Chunk73800.messageId ? (e = Chunk388032.intl.string(Chunk388032.t.qbSCqq), t = <Chunk481060.xPt size={"xs"} color={"currentColor"} />) : (0, Chunk754688.VO)(Chunk73800) ? (e = Chunk388032.intl.string(Chunk388032.t["6Fd/j4"]), t = <Chunk481060.acy size={"xs"} color={"currentColor"} />) : (e = Chunk388032.intl.string(Chunk388032.t.jQRwp6), t = <Chunk481060.mBM size={"xs"} color={"currentColor"} />), <div className={Chunk212522.contentDefault}>{<div className={Chunk212522.iconContainer}>{exports}</div>}{module}{<div className={Chunk212522.misc}>{i}</div>}</div>
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: i,
      focused: s,
      score: a,
      id: l
    } = this.props;
    return <S id={Chunk456100} onMouseEnter={module} onClick={exports} onFocus={require} onContextMenu={i} focused={Chunk73800} score={Chunk481060}>{this.renderContent()}</S>
  }
}
class D extends Chunk73800.Component {
  renderContent() {
    let e, t, {
        navigationRecord: n,
        children: i
      } = this.props,
      {
        enabled: s
      } = Chunk456100.c.getCurrentConfig({
        location: "QuickSwitcherResults"
      }, {
        autoTrackExposure: true
      }),
      c = Chunk73800 ? Chunk481060.iWm : Chunk481060.jje;
    switch (require.type) {
      case Chunk815372.Ky.SHOP:
        e = Chunk388032.intl.string(Chunk388032.t.pWG4zc), t = <Chunk481060.EOn size={"xs"} color={"currentColor"} />;
        break;
      case Chunk815372.Ky.NITRO_HOME:
        e = Chunk388032.intl.string(Chunk388032.t.Ipxkoq), t = <Chunk481060.SrA size={"xs"} color={"currentColor"} />;
        break;
      case Chunk815372.Ky.QUEST_HOME:
        e = Chunk388032.intl.string(Chunk388032.t.JALI2N), t = <Chunk481060.qDn size={"xs"} color={"currentColor"} />;
        break;
      case Chunk815372.Ky.APPS_HOME:
        e = Chunk388032.intl.string(Chunk388032.t.PHjkRE), t = <Chunk43267 size={"xs"} color={"currentColor"} />;
        break;
      case Chunk815372.Ky.SETTINGS:
        var d;
        e = null != (d = require.label) ? Chunk933557 : Chunk388032.intl.string(Chunk388032.t["3D5yo6"]), t = <Chunk481060.ewm size={"xs"} color={"currentColor"} />;
        break;
      default:
        e = require.id, t = <Chunk481060.xPt size={"xs"} color={"currentColor"} />
    }
    return <div className={Chunk212522.contentDefault}>{<div className={Chunk212522.iconContainer}>{exports}</div>}{<div className={Chunk212522.name}>{module}</div>}{<div className={Chunk212522.misc}>{i}</div>}</div>
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: i,
      focused: s,
      score: a,
      id: l
    } = this.props;
    return <S id={Chunk456100} onMouseEnter={module} onClick={exports} onFocus={require} onContextMenu={i} focused={Chunk73800} score={Chunk481060}>{this.renderContent()}</S>
  }
}