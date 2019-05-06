import React, {Component} from 'react';
import {Header, Grid, Container, Image, Segment} from 'semantic-ui-react'
import {withRouter} from "react-router-dom";
import productList from './productList.js'


class ProductGrid extends Component {

    state = {}

    componentDidMount() {
        productList.map((product) => {
            this.setState((prevState) => {
                return {["product" + product.productId]: this.props.styles.ItemOverlay}
            })
        })
    }

    handleItemClick = (e) => {
        this.props.history.push({pathname: e.currentTarget.attributes.to.nodeValue});
    }

    onHover = (e) => {
        console.log("hovered")
        console.log(e.currentTarget.children.namedItem("overlay"))
        e.currentTarget.children.namedItem("overlay").attributes.style

        this.setState({[e.currentTarget.id]: this.props.styles.ItemOverlayHovered})

    }
    onMouseExit = (e) => {

        this.setState({[e.currentTarget.id]: this.props.styles.ItemOverlay})
    }


    render() {
        return (

            <Grid style={{margin: '25px'}}>


                    {productList.map(product => (
                        <Grid.Column width={4} style={{maxWidth:"300px"}} >
                        <Segment basic>
                            <Container id={"product" + product.productId}
                                       to={'/product/' + product.productId}
                                       onMouseEnter={this.onHover}
                                       onClick={this.handleItemClick}
                                       onMouseLeave={this.onMouseExit}
                                       style={{...this.props.styles.ProductContainer}}>
                                <div ref={"overlay" + product.productId} id={"overlay"}
                                     style={this.state["product" + product.productId]}/>
                                <Image src={product.img} style={this.props.styles.ThumbnailImage}/>
                                <div className="content">
                                    <Header style={{textAlign: 'center', margin: "0"}}>{product.title}</Header>
                                    <div className="meta" style={{textAlign: 'center'}}>{product.price}</div>
                                </div>

                            </Container>
                        </Segment>
                        </Grid.Column>
                    ))}



            </Grid>
        );
    }
}


export default withRouter(ProductGrid);

/*
     <Card key={product.productId}
                                  image={product.img}
                                  header={product.title}
                                  meta={product.price}
                                  onClick={this.handleItemClick}
                                  to={'/product/' + product.productId}
                                  onMouseEnter={this.onHover}
                                  onMouseLeave={this.onMouseExit}
                            >
 */