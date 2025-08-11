/** Chunk was on 1272 **/
/** chunk id: 34305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk325432 = require("./325432.js"),
  Chunk570928 = require("./570928.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk579022 = require("./579022.jsx"),
  Chunk391690 = require("./391690.js"),
  Chunk424218 = require("./424218.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk512231 = require("./512231.js"),
  Chunk20493 = require("./20493.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class O extends Chunk73800.PureComponent {
  renderDiskUsageCircle() {
    let {
      metadata: e
    } = this.props;
    return null != module && null != module.availableKB && null != module.totalKB ? (0, Chunk255367.jsx)(Chunk579022.Z, {
      total: module.totalKB,
      used: module.totalKB - module.availableKB
    }) : null
  }
  renderViewing() {
    let e, t, {
      path: n,
      label: i,
      editingPath: l,
      isDefault: o,
      metadata: u
    } = this.props;
    return null != Chunk579022 && (e = null != Chunk579022.availableKB ? (0, Chunk424218.BU)(Chunk579022.availableKB, {
      useKibibytes: true
    }) : null, t = null != Chunk579022.totalKB ? (0, Chunk424218.BU)(Chunk579022.totalKB, {
      useKibibytes: true
    }) : null), (0, Chunk255367.jsxs)(Chunk600164.Z, {
      className: Chunk512231.installationPath,
      align: Chunk600164.Z.Align.CENTER,
      children: [this.renderDiskUsageCircle(), (0, Chunk255367.jsxs)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk512231.__invalid_descriptionWrapper,
        children: [(0, Chunk255367.jsxs)(Chunk600164.Z, {
          align: Chunk600164.Z.Align.CENTER,
          children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
            className: Chunk512231.rowTitle,
            variant: "heading-md/semibold",
            children: null != Chunk73800 ? Chunk73800 : Chunk391690.Z.getLabelFromPath(require)
          }), Chunk325432 ? (0, Chunk255367.jsx)("span", {
            className: Chunk512231.defaultIndicator,
            children: Chunk388032.intl.string(Chunk388032.t.bBvAEB)
          }) : null]
        }), null != Chunk579022 && null != module && null != exports ? (0, Chunk255367.jsx)(Chunk570928.Z, {
          className: Chunk512231.rowBody,
          hoverText: Chunk388032.intl.formatToPlainString(Chunk388032.t.Fxo9e3, {
            available: module,
            total: exports
          }),
          children: require
        }) : (0, Chunk255367.jsx)(Chunk481060.Text, {
          className: Chunk512231.rowBody,
          variant: "text-xs/normal",
          children: require
        })]
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "secondary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.bt75u7),
        disabled: null != Chunk442837,
        onClick: this.handleStartEditing
      })]
    })
  }
  renderEditing() {
    let {
      path: e,
      hasGamesInstalledInPath: t
    } = this.props, {
      label: n,
      isDefault: i
    } = this.state;
    return (0, Chunk255367.jsx)(Chunk481060.Zbd, {
      editable: true,
      className: Chunk512231.installationPathEditing,
      children: (0, Chunk255367.jsxs)(Chunk600164.Z, {
        children: [this.renderDiskUsageCircle(), (0, Chunk255367.jsxs)(Chunk600164.Z.Child, {
          children: [(0, Chunk255367.jsx)(Chunk481060.xJW, {
            title: Chunk388032.intl.string(Chunk388032.t.AJkKCA),
            children: (0, Chunk255367.jsx)(Chunk481060.oil, {
              value: require,
              placeholder: Chunk391690.Z.getLabelFromPath(module),
              onChange: this.handleLabelChange
            })
          }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
            title: Chunk388032.intl.string(Chunk388032.t.lnUCwc),
            className: Chunk20493.marginTop20,
            children: (0, Chunk255367.jsx)(Chunk481060.oil, {
              disabled: true,
              value: module
            })
          }), (0, Chunk255367.jsx)(Chunk481060.XZJ, {
            type: Chunk481060.XZJ.Types.INVERTED,
            value: null != Chunk73800 ? Chunk73800 : this.props.isDefault,
            disabled: this.props.isDefault,
            className: Chunk512231.defaultLocationCheckbox,
            onChange: this.handleToggleDefault,
            children: Chunk388032.intl.string(Chunk388032.t.Z2MWuL)
          }), (0, Chunk255367.jsx)(Chunk481060.$i$, {
            className: Chunk512231.separator
          }), (0, Chunk255367.jsxs)(Chunk600164.Z, {
            children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
              variant: "critical-secondary",
              size: "sm",
              text: Chunk388032.intl.string(Chunk388032.t.iBUzS0),
              disabled: exports || this.props.isDefault,
              onClick: this.handleRemoveLocation
            }), (0, Chunk255367.jsx)(Chunk600164.Z, {
              justify: Chunk600164.Z.Justify.END,
              children: (0, Chunk255367.jsxs)(Chunk481060.hE2, {
                children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
                  variant: "secondary",
                  size: "sm",
                  text: Chunk388032.intl.string(Chunk388032.t["ETE/oK"]),
                  onClick: this.handleStopEditing
                }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
                  variant: "active",
                  size: "sm",
                  text: Chunk388032.intl.string(Chunk388032.t.R3BPHx),
                  disabled: module === this.props.path && require === this.props.label && Chunk73800 === this.props.isDefault,
                  onClick: this.handleSaveChanges
                })]
              })
            })]
          })]
        })]
      })
    })
  }
  render() {
    return this.props.editingPath === this.props.path ? this.renderEditing() : this.renderViewing()
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      label: true,
      isDefault: null
    }), _(this, "handleStartEditing", () => {
      let {
        path: e,
        label: t,
        isDefault: n,
        onToggleEditing: r
      } = this.props;
      r(e), this.setState({
        label: t,
        isDefault: n
      })
    }), _(this, "handleStopEditing", () => {
      let {
        onToggleEditing: e
      } = this.props;
      e(null), this.setState({
        label: true,
        isDefault: null
      })
    }), _(this, "handleRemoveLocation", () => {
      (0, a.h7j)(e => {
        var t, n;
        return (0, r.jsx)(a.ConfirmModal, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              _(e, t, n[t])
            })
          }
          return e
        }({}, e), n = n = {
          header: g.intl.string(g.t.iBUzS0),
          confirmText: g.intl.string(g.t.iBUzS0),
          cancelText: g.intl.string(g.t["ETE/oK"]),
          onConfirm: () => {
            this.handleStopEditing(), (0, o.iD)(this.props.path)
          },
          children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: g.intl.string(g.t["1XqeW1"])
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      })
    }), _(this, "handleSaveChanges", () => {
      (0, o.Tb)(this.props.path, {
        label: null != this.state.label ? this.state.label : this.props.label,
        isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault
      }), this.handleStopEditing()
    }), _(this, "handleLabelChange", e => {
      this.setState({
        label: e
      })
    }), _(this, "handleToggleDefault", () => {
      this.setState({
        isDefault: !this.state.isDefault
      })
    })
  }
}
class E extends Chunk73800.PureComponent {
  componentDidMount() {
    (0, Chunk325432.ec)(this.props.installationPaths.map(e => {
      let {
        path: t
      } = e;
      return t
    }))
  }
  render() {
    let {
      installationPaths: e,
      installationPathsMetadata: t,
      defaultInstallationPath: n
    } = this.props, {
      editingPath: i
    } = this.state;
    return (0, Chunk255367.jsxs)(Chunk481060.hjN, {
      className: Chunk512231.wrapper,
      title: Chunk388032.intl.string(Chunk388032.t.aLszkJ),
      children: [module.map(e => {
        let {
          path: l,
          label: a
        } = e;
        return (0, r.jsx)(O, {
          path: l,
          label: a,
          metadata: t[l],
          isDefault: n === l,
          editingPath: i,
          hasGamesInstalledInPath: d.Z.hasGamesInstalledInPath(l),
          onToggleEditing: this.handleToggleEditing
        }, l)
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk512231.buttonRowWrapper,
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t.pnZ2ur),
          disabled: !Chunk358085.isPlatformEmbedded,
          onClick: this.handleAddInstallationLocation
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      editingPath: null
    }), _(this, "handleAddInstallationLocation", () => {
      f.ZP.showOpenDialog(["openDirectory"]).then(e => {
        null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, o.RY)(e[0])
      })
    }), _(this, "handleToggleEditing", e => {
      this.setState({
        editingPath: e
      })
    })
  }
}
let y = Chunk442837.ZP.connectStores([Chunk391690.Z], () => ({
  installationPaths: Chunk391690.Z.installationPaths,
  installationPathsMetadata: Chunk391690.Z.installationPathsMetadata,
  defaultInstallationPath: Chunk391690.Z.defaultInstallationPath
}))(E)