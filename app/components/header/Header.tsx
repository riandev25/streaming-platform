'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Nav, NavDropdown, Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { replaceSpaceWithHypen } from '../../utils/replaceSpaceWithHypen';

const Header = () => {
  const [inputSearch, setInputSearch] = useState('');

  const router = useRouter();

  const handleRouteToHome = () => {
    router.push('/');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedSearchString = replaceSpaceWithHypen(inputSearch);
    router.push(`/search/${formattedSearchString}`);
  };

  return (
    <Navbar
      variant=''
      expand='lg'
      className='bg-body-tertiary px-5 py-3 bg-dark'
    >
      <Container fluid>
        <Navbar.Brand
          style={{ cursor: 'pointer' }}
          className='me-auto'
          onClick={handleRouteToHome}
        >
          App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll' className='justify-content-end'>
          <Form className='d-flex' onSubmit={handleSubmit}>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <Button type='submit' variant='outline-success'>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
