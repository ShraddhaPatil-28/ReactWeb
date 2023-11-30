import React from 'react'
import Title from './Title'
import { Col, Container, Row } from 'react-bootstrap'
import { IoMdMail } from "react-icons/io";

const Services = () => {
  const abc = [{
    
    info:"Lorem Ipsum" ,
    pro:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    
  },
  {
   info:"Dolor Sitema",
   pro:"Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
  },
  {
    info:"Dolor Sitema",
    pro:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
   },
   {
    info:"Dolor Sitema",
    pro:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
   },
   {
     info:"Dolor Sitema",
     pro:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    },
    {
      info:"Dolor Sitema",
      pro:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
     },
]
  return (
    <>
    <div className='Services '>
     
     <Title titles="Services" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."/>
    <Container>
      <Row>
        {
          abc.map((a) => {
           return(
            <>
            <Col lg={4}>
          <h5>{a.info}</h5>
          <p>{a.pro}</p>
        </Col>
            </>
           )
          })
        }
       
      </Row>
    </Container>
    </div>

    </>
  )
}

export default Services
