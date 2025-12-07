// Flow Control Nodes
export { StartNode } from './StartNode';
export { EndNode } from './EndNode';

// AI/LLM Nodes
export { OpenAINode } from './OpenAINode';
export { PromptTemplateNode } from './ai/AINodes';

// Input/Output Nodes
export { TextInputNode } from './TextInputNode';

// Data Processing (kept minimal useful ones)
export { StringFormatterNode } from './data/StringFormatterNode';
export { JSONParserNode } from './data/JSONParserNode';

// Market-Ready Practical Nodes
export {
  OutputDisplayNode,
  VariableNode,
  TextMergeNode,
  TextTransformNode,
  ConditionNode,
} from './practical/PracticalNodes';
