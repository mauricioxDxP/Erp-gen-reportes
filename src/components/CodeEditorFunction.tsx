import { Component } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

interface codeditorfunint {
    valor: string;
    tamano: string;
}
class CodeEditorFunction extends Component<codeditorfunint> {

    constructor(valor: codeditorfunint) {
        super(valor);
    }

    render() {
        return (
            <div style={{ overflow: 'auto' }}>
                <CodeEditor style={{ width: '-webkit-fill-available', height: this.props.tamano, overflow: 'auto' }}
                    value={this.props.valor}
                    name='clase'
                    language="csharp"
                    data-color-mode='dark'

                ></CodeEditor>
            </div>
        );
    }
}

export default CodeEditorFunction;