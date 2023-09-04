import CodeEditor from '@uiw/react-textarea-code-editor';
interface codeditorfunint{
    valor:string;
}
class CodeEditorFunction extends Component<codeditorfunint> {

    constructor(valor:codeditorfunint) {
        super(valor);
    }

    render() {
        return (
            <>
                <CodeEditor style={{ width: '-webkit-fill-available', height: "90vh" }}
                value={this.props.valor}
                name='clase'
                language="csharp"
                data-color-mode='dark'
                ></CodeEditor>
            </>
        );
    }
}

export default CodeEditorFunction;