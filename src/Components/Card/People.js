import  React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {Col,Row, Conteiner, Form, Button} from 'react-bootstrap';
import './styleModal.scss';

class People extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            homes: this.props.homes


        };



        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const name =this.props.name;
        const description =this.getDescription.value;
        const wiki=this.getWiki.value;
        const image=this.getImage.files[0].name;
        const house = this.props.house;
        const data={
            name,
            description,
            wiki,
            image,
            house,
        };

        this.props.dispatch({
            type:"Update_People",
            data
        });

        this.setState({homes: this.props.homes});
    }



    componentDidMount() {
        Modal.setAppElement('body');
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }


    closeModal() {
        this.setState({modalIsOpen: false});
    }
    returnParamTrue=(arg)=>{if(typeof (arg) == !undefined){return arg}};
render(){

    const home =this.state.homes.filter((el)=>{return el.name == this.props.house});
    const peoples =home[0].people;
    let people =peoples.filter((el)=>{return el.name == this.props.name});
    if (!people[0]){people[0]=""}


    return(

        <div >
            <h2 onDoubleClick={this.openModal}>{this.props.name}</h2>

            <Modal
                isOpen={this.state.modalIsOpen}
                // onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                // style={customStyles}
                contentLabel="Example Modal"


            >
                <Row>
                    <Col md={6}>
                        <h2 className='test'>{this.props.name}</h2>
                        <p><span className="text-primary">Description: </span>{people[0].description}</p>
                        <p><span className="text-primary">wikiSuffix: </span> {people[0].wikiSuffix}</p>
                        <p><span className="text-primary">imageSuffix: </span> {people[0].imageSuffix}</p>
                    </Col>
                    <Col md={6}>
                        <div>Update</div>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasic">

                                <Form.Label>Description</Form.Label>
                                <Form.Control type="textarea" placeholder="Description"  ref={input => (this.getDescription = input)}/>
                                <Form.Label>Wiki</Form.Label>
                                <Form.Control type="text" placeholder="Wiki"  ref={input => (this.getWiki = input)}/>
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" placeholder="name"  accept="image/*" ref={input => (this.getImage = input)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>

                    </Col>
                </Row>

                <button onClick={this.closeModal} className="btn btn-danger ">close</button>


            </Modal>
        </div>
    )
}
}
const mapStateToProps = state => {
    return {
        homes: state.get('houses')
    };
};
export default connect(mapStateToProps)(People);