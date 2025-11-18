/** Chunk was on 1272 **/
/** chunk id: 34305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk167103 = require("./167103.js"),
  Chunk10198 = require("./10198.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class E extends Chunk473749.PureComponent {
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
      isDefault: s,
      metadata: u
    } = this.props;
    return null != Chunk579022 && (e = null != Chunk579022.availableKB ? (0, Chunk424218.BU)(Chunk579022.availableKB, {
      useKibibytes: true
    }) : null, t = null != Chunk579022.totalKB ? (0, Chunk424218.BU)(Chunk579022.totalKB, {
      useKibibytes: true
    }) : null), (0, Chunk54381.jsxs)(Chunk600164.Z, {
      className: Chunk167103.installationPath,
      align: Chunk600164.Z.Align.CENTER,
      children: [this.renderDiskUsageCircle(), (0, Chunk54381.jsxs)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk167103.__invalid_descriptionWrapper,
        children: [(0, Chunk54381.jsxs)(Chunk600164.Z, {
          align: Chunk600164.Z.Align.CENTER,
          children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
            className: Chunk167103.rowTitle,
            variant: "heading-md/semibold",
            children: null != Chunk473749 ? Chunk473749 : Chunk391690.Z.getLabelFromPath(require)
          }), Chunk325432 ? (0, Chunk54381.jsx)("span", {
            className: Chunk167103.defaultIndicator,
            children: Chunk388032.intl.string(Chunk388032.t.bBvAEH)
          }) : null]
        }), null != Chunk579022 && null != module && null != exports ? (0, Chunk54381.jsx)(Chunk570928.Z, {
          className: Chunk167103.rowBody,
          hoverText: Chunk388032.intl.formatToPlainString(Chunk388032.t["Fxo9e+"], {
            available: module,
            total: exports
          }),
          children: require
        }) : (0, Chunk54381.jsx)(Chunk481060.Text, {
          className: Chunk167103.rowBody,
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
      className: Chunk167103.installationPathEditing,
      children: (0, Chunk54381.jsxs)(Chunk600164.Z, {
        children: [this.renderDiskUsageCircle(), (0, Chunk54381.jsxs)(Chunk600164.Z.Child, {
          children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
            label: Chunk388032.intl.string(Chunk388032.t.AJkKCB),
            value: require,
            placeholder: Chunk391690.Z.getLabelFromPath(module),
            onChange: this.handleLabelChange
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk10198.marginTop20,
            children: (0, Chunk54381.jsx)(Chunk481060.oil, {
              label: Chunk388032.intl.string(Chunk388032.t.lnUCwX),
              disabled: true,
              value: module
            })
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk167103.defaultLocationCheckbox,
            children: (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
              checked: null != Chunk473749 ? Chunk473749 : this.props.isDefault,
              disabled: this.props.isDefault,
              onChange: this.handleToggleDefault,
              label: Chunk388032.intl.string(Chunk388032.t.Z2MWuH)
            })
          }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
            className: Chunk167103.separator
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
    super(...e), b(this, "state", {
      label: true,
      isDefault: null
    }), b(this, "handleStartEditing", () => {
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
    }), b(this, "handleStopEditing", () => {
      let {
        onToggleEditing: e
      } = this.props;
      e(null), this.setState({
        label: true,
        isDefault: null
      })
    }), b(this, "handleRemoveLocation", () => {
      (0, a.h7j)(e => (0, r.jsx)(a.ConfirmModal, function(e, t) {
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
            b(e, t, n[t])
          })
        }
        return e
      }({}, e), {
        header: g.intl.string(g.t.iBUzS5),
        confirmText: g.intl.string(g.t.iBUzS5),
        cancelText: g.intl.string(g.t["ETE/oC"]),
        onConfirm: () => {
          this.handleStopEditing(), (0, s.iD)(this.props.path)
        },
        children: (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          children: g.intl.string(g.t["1XqeW2"])
        })
      })))
    }), b(this, "handleSaveChanges", () => {
      (0, s.Tb)(this.props.path, {
        label: null != this.state.label ? this.state.label : this.props.label,
        isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault
      }), this.handleStopEditing()
    }), b(this, "handleLabelChange", e => {
      this.setState({
        label: e
      })
    }), b(this, "handleToggleDefault", () => {
      this.setState({
        isDefault: !this.state.isDefault
      })
    })
  }
}
class O extends Chunk473749.PureComponent {
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
      className: Chunk167103.wrapper,
      children: (0, Chunk54381.jsxs)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t.aLszkC),
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
            hasGamesInstalledInPath: d.Z.hasGamesInstalledInPath(l),
            onToggleEditing: this.handleToggleEditing
          }, l)
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk167103.buttonRowWrapper,
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
    super(...e), b(this, "state", {
      editingPath: null
    }), b(this, "handleAddInstallationLocation", () => {
      h.ZP.showOpenDialog(["openDirectory"]).then(e => {
        null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, s.RY)(e[0])
      })
    }), b(this, "handleToggleEditing", e => {
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
}))(O)