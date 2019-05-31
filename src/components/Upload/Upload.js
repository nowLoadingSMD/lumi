import React, { Component } from 'react';

import './Upload.css';

import iconX from './assets/x.svg';

import Header from '../Header/Header';
import StepBar from './StepBar/StepBar';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      steps: [
        {
          title: {
            value: '',
            isValid: null
          },
          link: {
            value: '',
            isValid: null
          },
          description: {
            value: '',
            isValid: null
          },
          genre: {
            value: '',
            isValid: null
          },
          parentalRating: {
            value: 'Livre',
            isValid: null
          },
          content: {
            value: '',
            isValid: null
          },
          tags: {
            value: [],
            isValid: true
          }
        },
        {
          cast: {
            value: [],
            isValid: null
          },
          members: {
            value: [],
            isValid: null
          }
        },
        {
          isIdenpendent: {
            value: false,
            isValid: null
          }
        },
        {
          discipline: {
            value: '',
            isValid: null
          },
          semester: {
            value: '',
            isValid: null
          },
          professor: {
            value: '',
            isValid: null
          },
          about: {
            value: '',
            isValid: null
          },
          event: {
            value: '',
            isValid: null
          }
        }
      ]
    };
  }

  onChange = e => {
    const { steps, step } = this.state;
    const currentStepState = steps[step - 1];
    const newCurrentStepState = {
      ...currentStepState,
      [e.target.name]: { value: e.target.value, isValid: this.isValid(e) }
    };
    const newSteps = [...steps];
    newSteps[step - 1] = newCurrentStepState;
    this.setState({ steps: newSteps });
  };

  isValid = e => {
    if (e.target.name == 'link') {
    } else if (e.target.name == 'tags') {
      return true;
    } else {
      if (
        e.target.value != null &&
        e.target.value != undefined &&
        e.target.value != ''
      ) {
        return true;
      }
    }
    return false;
  };

  canChangeStep = () => {
    const { steps, step } = this.state;
    const currentStepState = steps[step - 1];

    console.log(currentStepState);

    return Object.keys(currentStepState)
      .map(key => currentStepState[key].isValid)
      .reduce((accumulator, current) => {
        return current && accumulator;
      }, true);
  };

  closeModal = () => {
    this.props.onChangeState();
  };

  nextStep = () => {
    if (this.canChangeStep()) {
      this.setState({ step: this.state.step + 1 });
    }
  };

  returnStep = () => {
    this.setState({ step: this.state.step - 1 });
  };

  resetSteps = () => {
    this.setState({ step: 1 });
  };

  render() {
    const { steps } = this.state;
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <div className="backgroundModal" onClick={this.closeModal} />
        <div className="modalUpload">
          <div className="labelModal">
            <Header>Enviar vídeo</Header>
            <img src={iconX} className="closeModal" onClick={this.closeModal} />
          </div>
          {this.state.step <= 5 && (
            <div className="contentModal">
              {this.state.step < 5 && <StepBar step={this.state.step} />}
              {this.state.step == 1 && (
                <Step1 stepState={steps[0]} onChange={this.onChange} />
              )}
              {this.state.step == 2 && (
                <Step2 stepState={steps[1]} onChange={this.onChange} />
              )}
              {this.state.step == 3 && (
                <Step3 stepState={steps[2]} onChange={this.onChange} />
              )}
              {this.state.step == 4 && (
                <Step4 stepState={steps[3]} onChange={this.onChange} />
              )}
              {this.state.step == 5 && <Step5 resetSteps={this.resetSteps} />}
            </div>
          )}
          <div className="handleSteps">
            {this.state.step > 1 && this.state.step < 5 && (
              <button
                className="button buttonSecundary"
                onClick={this.returnStep}
              >
                Anterior
              </button>
            )}
            {this.state.step < 4 && (
              <button className="button buttonPrimary" onClick={this.nextStep}>
                Próximo
              </button>
            )}
            {this.state.step == 4 && (
              <button className="button buttonPrimary" onClick={this.nextStep}>
                Concluir
              </button>
            )}
            {this.state.step == 5 && (
              <button
                className="button buttonPrimary"
                onClick={this.closeModal}
              >
                Ok
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
