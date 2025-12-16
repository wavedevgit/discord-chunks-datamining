/** Chunk was on 1272 **/
/** chunk id: 34305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk248514 = require("./248514.jsx"),
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
  Chunk14934 = require("./14934.js"),
  Chunk478411 = require("./478411.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class O extends Chunk473749.PureComponent {
  renderDiskUsageCircle() {
    let {
      metadata: e
    } = this.props;
    return null != module && null != module.availableKB && null != module.totalKB ? (0, Chunk54381.jsx)(Chunk579022.Z, {
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
    }) : null), (0, Chunk54381.jsxs)(Chunk600164.Z, {
      className: Chunk14934.installationPath,
      align: Chunk600164.Z.Align.CENTER,
      children: [this.renderDiskUsageCircle(), (0, Chunk54381.jsxs)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk14934.__invalid_descriptionWrapper,
        children: [(0, Chunk54381.jsxs)(Chunk600164.Z, {
          align: Chunk600164.Z.Align.CENTER,
          children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
            className: Chunk14934.rowTitle,
            variant: "heading-md/semibold",
            children: null != Chunk473749 ? Chunk473749 : Chunk391690.Z.getLabelFromPath(require)
          }), Chunk248514 ? (0, Chunk54381.jsx)("span", {
            className: Chunk14934.defaultIndicator,
            children: Chunk388032.intl.string(Chunk388032.t.bBvAEH)
          }) : null]
        }), null != Chunk325432 && null != module && null != exports ? (0, Chunk54381.jsx)(Chunk570928.Z, {
          className: Chunk14934.rowBody,
          hoverText: Chunk388032.intl.formatToPlainString(Chunk388032.t["Fxo9e+"], {
            available: module,
            total: exports
          }),
          children: require
        }) : (0, Chunk54381.jsx)(Chunk481060.Text, {
          className: Chunk14934.rowBody,
          variant: "text-xs/normal",
          children: require
        })]
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "secondary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.bt75uw),
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
    return (0, Chunk54381.jsx)(Chunk481060.Zbd, {
      editable: true,
      className: Chunk14934.installationPathEditing,
      children: (0, Chunk54381.jsxs)(Chunk600164.Z, {
        children: [this.renderDiskUsageCircle(), (0, Chunk54381.jsxs)(Chunk600164.Z.Child, {
          children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
            label: Chunk388032.intl.string(Chunk388032.t.AJkKCB),
            value: require,
            placeholder: Chunk391690.Z.getLabelFromPath(module),
            onChange: this.handleLabelChange
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk478411.marginTop20,
            children: (0, Chunk54381.jsx)(Chunk481060.oil, {
              label: Chunk388032.intl.string(Chunk388032.t.lnUCwX),
              disabled: true,
              value: module
            })
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk14934.defaultLocationCheckbox,
            children: (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
              checked: null != Chunk473749 ? Chunk473749 : this.props.isDefault,
              disabled: this.props.isDefault,
              onChange: this.handleToggleDefault,
              label: Chunk388032.intl.string(Chunk388032.t.Z2MWuH)
            })
          }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
            className: Chunk14934.separator
          }), (0, Chunk54381.jsxs)(Chunk600164.Z, {
            children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
              variant: "critical-secondary",
              size: "sm",
              text: Chunk388032.intl.string(Chunk388032.t.iBUzS5),
              disabled: exports || this.props.isDefault,
              onClick: this.handleRemoveLocation
            }), (0, Chunk54381.jsx)(Chunk600164.Z, {
              justify: Chunk600164.Z.Justify.END,
              children: (0, Chunk54381.jsxs)(Chunk481060.ButtonGroup, {
                children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
                  variant: "secondary",
                  size: "sm",
                  text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
                  onClick: this.handleStopEditing
                }), (0, Chunk54381.jsx)(Chunk481060.Button, {
                  variant: "active",
                  size: "sm",
                  text: Chunk388032.intl.string(Chunk388032.t["R3BPH+"]),
                  disabled: module === this.props.path && require === this.props.label && Chunk473749 === this.props.isDefault,
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
    super(...e), E(this, "state", {
      label: true,
      isDefault: null
    }), E(this, "handleStartEditing", () => {
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
    }), E(this, "handleStopEditing", () => {
      let {
        onToggleEditing: e
      } = this.props;
      e(null), this.setState({
        label: true,
        isDefault: null
      })
    }), E(this, "handleRemoveLocation", () => {
      (0, a.Z)({
        title: m.intl.string(m.t.iBUzS5),
        subtitle: m.intl.string(m.t["1XqeW2"]),
        confirmText: m.intl.string(m.t.iBUzS5),
        onConfirm: () => {
          this.handleStopEditing(), (0, s.iD)(this.props.path)
        }
      })
    }), E(this, "handleSaveChanges", () => {
      (0, s.Tb)(this.props.path, {
        label: null != this.state.label ? this.state.label : this.props.label,
        isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault
      }), this.handleStopEditing()
    }), E(this, "handleLabelChange", e => {
      this.setState({
        label: e
      })
    }), E(this, "handleToggleDefault", () => {
      this.setState({
        isDefault: !this.state.isDefault
      })
    })
  }
}
class v extends Chunk473749.PureComponent {
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
    return (0, Chunk54381.jsx)("div", {
      className: Chunk14934.wrapper,
      children: (0, Chunk54381.jsxs)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t.aLszkC),
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
            hasGamesInstalledInPath: p.Z.hasGamesInstalledInPath(l),
            onToggleEditing: this.handleToggleEditing
          }, l)
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk14934.buttonRowWrapper,
          children: (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "primary",
            size: "sm",
            text: Chunk388032.intl.string(Chunk388032.t.pnZ2uk),
            disabled: !Chunk358085.isPlatformEmbedded,
            onClick: this.handleAddInstallationLocation
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      editingPath: null
    }), E(this, "handleAddInstallationLocation", () => {
      h.ZP.showOpenDialog(["openDirectory"]).then(e => {
        null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, s.RY)(e[0])
      })
    }), E(this, "handleToggleEditing", e => {
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