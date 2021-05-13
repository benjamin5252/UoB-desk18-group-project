import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './../index';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";


afterEach(cleanup); 

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Intro/>, div);
});

it("render text correctly", () => {
    const {getByTestId} = render(<Intro/>);
    expect(getByTestId('btnStart')).toHaveTextContent("START");
    expect(getByTestId('btnTutorial')).toHaveTextContent("TUTORIAL");
    expect(getByTestId('btnSkip')).toHaveTextContent("SKIP AND START");
});

it("match snapshot", () => {
    const tree = renderer.create(<Intro/>).toJSON();
    expect(tree).toMatchSnapshot();
});

