/** Chunk was on 83264 **/
/** chunk id: 711184, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk401190 = require("./401190.js"),
  Chunk490529 = require("./490529.js"),
  Chunk57875 = require("./57875.jsx"),
  Chunk368003 = require("./368003.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk147972 = require("./147972.js"),
  Chunk20493 = require("./20493.js");

function b(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let j = e => <div className={m.innerContentWrapper}>{e.children}</div>,
  f = {
    [Chunk981631.gkr.HOUSE_1]: require("./530530.js"),
    [Chunk981631.gkr.HOUSE_2]: require("./230651.js"),
    [Chunk981631.gkr.HOUSE_3]: require("./497494.js")
  },
  y = {
    [Chunk981631.gkr.HOUSE_1]: Chunk147972.quizResultLogoWrapperHouse1,
    [Chunk981631.gkr.HOUSE_2]: Chunk147972.quizResultLogoWrapperHouse2,
    [Chunk981631.gkr.HOUSE_3]: Chunk147972.quizResultLogoWrapperHouse3
  },
  S = e => ({
    [h.gkr.HOUSE_1]: g.intl.string(g.t["hNL/nJ"]),
    [h.gkr.HOUSE_2]: g.intl.string(g.t.jVomur),
    [h.gkr.HOUSE_3]: g.intl.string(g.t["+kg5zs"])
  })[e];
class k extends Chunk73800.Component {
  getSelectedHouseID() {
    let e, {
        responses: t
      } = this.state,
      r = {},
      n = 0;
    return (Object.keys(exports).forEach(s => {
      let i = t[s];
      null == r[i] && (r[i] = 0), r[i]++, r[i] > n && (e = i, n = r[i])
    }), null == module || module === Chunk981631.jsM) ? (0, Chunk490529.uj)() : module
  }
  renderUnknownErrorMessage() {
    return <Chunk57875.Z><Chunk73800.Fragment>{<Chunk481060.X6q className={Chunk147972.quizResultHeading} variant={"heading-xl/semibold"}>{Chunk388032.intl.string(Chunk388032.t["8A8ry8"])}</Chunk481060.X6q>}{<Chunk481060.Text variant={"text-sm/normal"}>{Chunk388032.intl.format(Chunk388032.t["4JWDXl"], {
            emailAddress: "hypesquad@".concat(Chunk981631.U9i),
            emailAddressLink: "mailto:hypesquad@".concat(Chunk981631.U9i)
          })}</Chunk481060.Text>}</Chunk73800.Fragment></Chunk57875.Z>
  }
  renderQuizResult() {
    let {
      selectedHouse: e
    } = this.state;
    if (null == module) return null;
    let t = Chunk388032.intl.formatToPlainString(Chunk388032.t.HrcQAA, {
      house: (0, Chunk490529.X8)(module)
    });
    return <Chunk57875.Z><Chunk73800.Fragment>{<div className={o()(Chunk147972.quizResultLogoWrapper, y[module], Chunk20493.marginBottom20)}><img alt={exports} className={Chunk147972.quizResultLogo} src={f[module]} /></div>}{<Chunk481060.X6q className={Chunk147972.quizResultHeading} variant={"heading-xl/semibold"}>{exports}</Chunk481060.X6q>}{<Chunk481060.Text className={Chunk147972.quizResultBody} variant={"text-sm/normal"}>{S(module)}</Chunk481060.Text>}</Chunk73800.Fragment></Chunk57875.Z>
  }
  renderContent() {
    let {
      currentStep: e,
      hasUnknownError: t,
      hasSubmittedHouse: r,
      questions: s
    } = this.state;
    if (exports) return this.renderUnknownErrorMessage();
    if (require) return this.renderQuizResult();
    let i = Chunk73800[module];
    return <Chunk57875.Z><Chunk368003.Z onSelect={this.handleQuestionSelect} options={Chunk120356.options} prompt={Chunk120356.prompt} /></Chunk57875.Z>
  }
  renderHeaderCopy() {
    let {
      currentStep: e,
      hasUnknownError: t,
      hasSubmittedHouse: r,
      questions: n
    } = this.state;
    return exports ? Chunk388032.intl.string(Chunk388032.t.fMgJMz) : require ? Chunk388032.intl.string(Chunk388032.t.mW2CNz) : Chunk388032.intl.formatToPlainString(Chunk388032.t["4n8Pb2"], {
      currentQuestion: module + 1,
      questionCount: Chunk255367.length
    })
  }
  renderNewsletterWarning() {
    return <Chunk57875.Z><Chunk481060.Text className={Chunk147972.nameFormPreface} variant={"text-md/normal"}>{Chunk388032.intl.string(Chunk388032.t["3kUvgo"])}</Chunk481060.Text></Chunk57875.Z>
  }
  renderPrimaryAction() {
    let {
      currentStep: e,
      responses: t,
      hasUnknownError: r,
      hasSubmittedHouse: s,
      isRequestPending: i,
      questions: o
    } = this.state, a = null == exports[module];
    return require ? <Chunk481060.zxk variant={"primary"} text={Chunk388032.intl.string(Chunk388032.t["5BGOBA"])} type={"submit"} onClick={this.handleSubmitButtonClick} loading={Chunk120356} /> : Chunk73800 ? <Chunk481060.zxk variant={"primary"} text={Chunk388032.intl.string(Chunk388032.t["Wc/k5O"])} type={"submit"} onClick={this.props.onClose} /> : module === o.length - 1 ? <Chunk481060.zxk variant={"primary"} text={Chunk388032.intl.string(Chunk388032.t.j5vHo6)} disabled={Chunk215569} type={"submit"} onClick={this.handleSubmitButtonClick} loading={Chunk120356} /> : <Chunk481060.zxk variant={"primary"} text={Chunk388032.intl.string(Chunk388032.t.cgonQE)} disabled={Chunk215569} type={"submit"} onClick={this.handleNextQuestionButtonClick} />
  }
  renderSecondaryAction() {
    let {
      hasSubmittedHouse: e
    } = this.state;
    return module ? null : <Chunk481060.zxk variant={"secondary"} text={Chunk388032.intl.string(Chunk388032.t["5NfNYm"])} type={"button"} onClick={this.props.onClose} />
  }
  render() {
    let {
      selectedHouse: e
    } = this.state, {
      transitionState: t
    } = this.props;
    return <Chunk481060.Y0X size={null == module ? Chunk481060.CgR.MEDIUM : Chunk481060.CgR.SMALL} transitionState={exports} parentComponent={"HouseSelectionModal"}>{<Chunk481060.xBx separator={false}><Chunk481060.X6q variant={"heading-lg/semibold"}>{this.renderHeaderCopy()}</Chunk481060.X6q></Chunk481060.xBx>}{<div className={Chunk147972.outerContentWrapper}><Chunk215569.W component={j}>{this.renderContent()}</Chunk215569.W></div>}{<Chunk481060.mzw>{this.renderPrimaryAction()}{this.renderSecondaryAction()}</Chunk481060.mzw>}</Chunk481060.Y0X>
  }
  constructor(...e) {
    super(...e), b(this, "state", {
      currentStep: 0,
      hasSubmittedHouse: false,
      hasUnknownError: false,
      isRequestPending: false,
      questions: (0, p.tI)(),
      responses: {},
      selectedHouse: null
    }), b(this, "handleQuestionSelect", e => {
      this.setState(t => {
        var r, n;
        return {
          responses: (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                b(e, t, r[t])
              })
            }
            return e
          }({}, t.responses), n = n = {
            [t.currentStep]: e
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e))
          }), r)
        }
      })
    }), b(this, "handleSubmitButtonClick", () => {
      let e = this.getSelectedHouseID();
      this.setState({
        isRequestPending: true
      }, () => {
        u.Z.joinHypeSquadOnline({
          houseID: e
        }).then(() => {
          this.setState({
            hasUnknownError: false,
            hasSubmittedHouse: true,
            isRequestPending: false,
            selectedHouse: e
          })
        }).catch(() => {
          this.setState({
            hasUnknownError: true,
            hasSubmittedHouse: false,
            isRequestPending: false
          })
        })
      })
    }), b(this, "handleKeyDown", e => {
      e.keyCode === h.yXg.ENTER && this.handleSubmitButtonClick()
    }), b(this, "handleNextQuestionButtonClick", () => {
      this.setState(e => ({
        currentStep: e.currentStep + 1
      }))
    })
  }
}
let O = k