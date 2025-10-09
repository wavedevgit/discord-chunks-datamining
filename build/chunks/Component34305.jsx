/** Chunk was on 1272 **/
/** chunk id: 34305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk499126 = require("./499126.js"),
  Chunk197571 = require("./197571.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class E extends Chunk647438.PureComponent {
  renderDiskUsageCircle() {
    let {
      metadata: e
    } = this.props;
    return null != module && null != module.availableKB && null != module.totalKB ? (0, Chunk951288.jsx)(Chunk579022.Z, {
      total: module.totalKB,
      used: module.totalKB - module.availableKB
    }) : null
  }
  renderViewing() {
    let e, t, {
      path: n,
      label: i,
      editingPath: l,
      isDefault: a,
      metadata: s
    } = this.props;
    return null != Chunk325432 && (e = null != Chunk325432.availableKB ? (0, Chunk424218.BU)(Chunk325432.availableKB, {
      useKibibytes: true
    }) : null, t = null != Chunk325432.totalKB ? (0, Chunk424218.BU)(Chunk325432.totalKB, {
      useKibibytes: true
    }) : null), (0, Chunk951288.jsxs)(Chunk600164.Z, {
      className: Chunk499126.installationPath,
      align: Chunk600164.Z.Align.CENTER,
      children: [this.renderDiskUsageCircle(), (0, Chunk951288.jsxs)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk499126.__invalid_descriptionWrapper,
        children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
          align: Chunk600164.Z.Align.CENTER,
          children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
            className: Chunk499126.rowTitle,
            variant: "heading-md/semibold",
            children: null != Chunk647438 ? Chunk647438 : Chunk391690.Z.getLabelFromPath(require)
          }), Chunk755721 ? (0, Chunk951288.jsx)("span", {
            className: Chunk499126.defaultIndicator,
            children: Chunk388032.intl.string(Chunk388032.t.bBvAEB)
          }) : null]
        }), null != Chunk325432 && null != module && null != exports ? (0, Chunk951288.jsx)(Chunk570928.Z, {
          className: Chunk499126.rowBody,
          hoverText: Chunk388032.intl.formatToPlainString(Chunk388032.t.Fxo9e3, {
            available: module,
            total: exports
          }),
          children: require
        }) : (0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk499126.rowBody,
          variant: "text-xs/normal",
          children: require
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
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
    return (0, Chunk951288.jsx)(Chunk481060.Zbd, {
      editable: true,
      className: Chunk499126.installationPathEditing,
      children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
        children: [this.renderDiskUsageCircle(), (0, Chunk951288.jsxs)(Chunk600164.Z.Child, {
          children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
            label: Chunk388032.intl.string(Chunk388032.t.AJkKCA),
            value: require,
            placeholder: Chunk391690.Z.getLabelFromPath(module),
            onChange: this.handleLabelChange
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk197571.marginTop20,
            children: (0, Chunk951288.jsx)(Chunk481060.oil, {
              label: Chunk388032.intl.string(Chunk388032.t.lnUCwc),
              disabled: true,
              value: module
            })
          }), (0, Chunk951288.jsx)(Chunk755721.VL, {
            checked: null != Chunk647438 ? Chunk647438 : this.props.isDefault,
            disabled: this.props.isDefault,
            className: Chunk499126.defaultLocationCheckbox,
            onChange: this.handleToggleDefault,
            label: Chunk388032.intl.string(Chunk388032.t.Z2MWuL)
          }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
            className: Chunk499126.separator
          }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
            children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "critical-secondary",
              size: "sm",
              text: Chunk388032.intl.string(Chunk388032.t.iBUzS0),
              disabled: exports || this.props.isDefault,
              onClick: this.handleRemoveLocation
            }), (0, Chunk951288.jsx)(Chunk600164.Z, {
              justify: Chunk600164.Z.Justify.END,
              children: (0, Chunk951288.jsxs)(Chunk481060.hE2, {
                children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
                  variant: "secondary",
                  size: "sm",
                  text: Chunk388032.intl.string(Chunk388032.t["ETE/oK"]),
                  onClick: this.handleStopEditing
                }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
                  variant: "active",
                  size: "sm",
                  text: Chunk388032.intl.string(Chunk388032.t.R3BPHx),
                  disabled: module === this.props.path && require === this.props.label && Chunk647438 === this.props.isDefault,
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
    super(...e), O(this, "state", {
      label: true,
      isDefault: null
    }), O(this, "handleStartEditing", () => {
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
    }), O(this, "handleStopEditing", () => {
      let {
        onToggleEditing: e
      } = this.props;
      e(null), this.setState({
        label: true,
        isDefault: null
      })
    }), O(this, "handleRemoveLocation", () => {
      (0, o.h7j)(e => (0, r.jsx)(o.ConfirmModal, function(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }(function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            O(e, t, n[t])
          })
        }
        return e
      }({}, e), {
        header: m.intl.string(m.t.iBUzS0),
        confirmText: m.intl.string(m.t.iBUzS0),
        cancelText: m.intl.string(m.t["ETE/oK"]),
        onConfirm: () => {
          this.handleStopEditing(), (0, s.iD)(this.props.path)
        },
        children: (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          children: m.intl.string(m.t["1XqeW1"])
        })
      })))
    }), O(this, "handleSaveChanges", () => {
      (0, s.Tb)(this.props.path, {
        label: null != this.state.label ? this.state.label : this.props.label,
        isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault
      }), this.handleStopEditing()
    }), O(this, "handleLabelChange", e => {
      this.setState({
        label: e
      })
    }), O(this, "handleToggleDefault", () => {
      this.setState({
        isDefault: !this.state.isDefault
      })
    })
  }
}
class v extends Chunk647438.PureComponent {
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
    return (0, Chunk951288.jsx)("div", {
      className: Chunk499126.wrapper,
      children: (0, Chunk951288.jsxs)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t.aLszkJ),
        children: [module.map(e => {
          let {
            path: l,
            label: a
          } = e;
          return (0, r.jsx)(E, {
            path: l,
            label: a,
            metadata: t[l],
            isDefault: n === l,
            editingPath: i,
            hasGamesInstalledInPath: p.Z.hasGamesInstalledInPath(l),
            onToggleEditing: this.handleToggleEditing
          }, l)
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk499126.buttonRowWrapper,
          children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            size: "sm",
            text: Chunk388032.intl.string(Chunk388032.t.pnZ2ur),
            disabled: !Chunk358085.isPlatformEmbedded,
            onClick: this.handleAddInstallationLocation
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), O(this, "state", {
      editingPath: null
    }), O(this, "handleAddInstallationLocation", () => {
      g.ZP.showOpenDialog(["openDirectory"]).then(e => {
        null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, s.RY)(e[0])
      })
    }), O(this, "handleToggleEditing", e => {
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
}))(v)